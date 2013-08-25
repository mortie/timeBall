var physics = {	
	'main': function() {
		this.player();
		this.misc();
	},
	
	'player': function() {
		var propKey = properties.key;
		
		state.player.pos.x += state.player.vel.x;
		state.player.pos.y += state.player.vel.y;
		
		//controls
		{
			if (input.keyPressed[propKey.up] && state.player.isOnGround) {
				state.player.vel.y -= properties.player.jumpForce;
				state.player.pos.y -= 1;
				state.player.isOnGround = false;
			}
			if (input.keyPressed[propKey.left]) {
				state.player.vel.x -= (properties.player.acceleration*2);
			}
			if (input.keyPressed[propKey.right]) {
				state.player.vel.x += (properties.player.acceleration*2);
			}
		}
		
		//slow down
		{
			if (state.player.vel.x > 0) {
				state.player.vel.x -= properties.player.acceleration;
			} else if (state.player.vel.x < 0) {
				state.player.vel.x += properties.player.acceleration;
			}
		}
		
		//gravity
		{
			if (!state.player.isOnGround) {
				state.player.vel.y += properties.gravity;
			}
		}
		
		//collision
		{	
			var blockIndex = this.getBlockIndex();
			var playerPos = state.player.pos
			var worldBlock = statState.world[blockIndex];
			var worldLethalBlock = statState.worldLethal[blockIndex];
			var pRadius = properties.player.radius;
			
			//before start
			if (state.player.pos.x-pRadius < -99){
				state.player.pos.x = -99+pRadius;
			}
			
			if (worldBlock != undefined) {
				
				//in cieling
				if (worldBlock.point[0].y > playerPos.y) {
					playerPos.y = worldBlock.point[0].y;
				}
				
				//in floor
				if (worldBlock.point[3].y - pRadius < playerPos.y) {
					state.player.pos.y = worldBlock.point[3].y - pRadius;
					state.player.isOnGround = true;
					state.player.vel.y = 0;
				} else {
					state.player.isOnGround = false;
				}
			}
			if (worldLethalBlock != undefined) {
				
				//in lethal
				if (worldLethalBlock.point[0].y + pRadius < playerPos.y) {
					statState.shouldGame = false;
					statState.dead = true;
				}
			}
			
		}
		
		//speed limit
		{
			if (state.player.vel.x > properties.player.maxSpeed)
				state.player.vel.x = properties.player.maxSpeed;
			else if (state.player.vel.x < -properties.player.maxSpeed) {
				state.player.vel.x = -properties.player.maxSpeed;
			}
		}
	},
	
	'getBlockIndex': function() {
		var index = (state.player.pos.x/properties.worldgen.width);
		return Math.ceil(index);
	},
	
	'misc': function() {
		
		//camera
		state.xmod = (-state.player.pos.x)+(draw.canvas.width/2);
		state.ymod = (-state.player.pos.y)+(draw.canvas.height/1.5);
	}
}