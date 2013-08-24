var physics = {
	'main': function() {
		this.player();
		this.misc();
	},
	
	'player': function() {
		var player = state.player;
		player.isOnGround = this.getOnGround();
		
		var propKey = properties.key;
		
		//controls
		{
			if (input.keyPressed[propKey.up] && player.isOnGround) {
				player.vel.y -= properties.player.jumpForce;
				player.isOnGround = false;
			}
			if (input.keyPressed[propKey.left]) {
				player.vel.x -= (properties.player.acceleration*2);
			}
			if (input.keyPressed[propKey.right]) {
				player.vel.x += (properties.player.acceleration*2);
			}
			if (state.player.vel.x > 0) {
				player.vel.x -= properties.player.acceleration;
			} else if (state.player.vel.x < 0) {
				player.vel.x += properties.player.acceleration;
			}
		}
		
		//gravity
		{
			if (player.isOnGround) {
				player.vel.y = 0;
				player.pos.y = state.player.collidesWith.point[2].y;
			} else {
				player.vel.y += properties.gravity;
			}
		}
		
		player.pos.x += state.player.vel.x;
		player.pos.y += state.player.vel.y;
	},
	
	'getOnGround': function() {
		var playerPoint = {
			'x': state.player.pos.x + (properties.player.width/2),
			'y': state.player.pos.y + properties.player.height,
		}
		for (var cIndex in state.world) {
			if (this.pointToRectCollision(playerPoint, state.world[cIndex].point)) {
				state.player.collidesWith = state.world[cIndex];
				return false;
			}
		}
		return true;
	},
	
	'pointToRectCollision': function(point, arrPoint) {
		if (point.x > arrPoint[0].x &&
			point.x < arrPoint[1].x &&
			point.y > arrPoint[0].y &&
			point.y < arrPoint[2].y) {
				return true;
		} else {
			return false;
		}
	},
	
	'misc': function() {
		
		//restoring
		if (input.onKeyDown[properties.key.restore]) {
			if (properties.restoreIndex > oldState.length){
				if (oldState[oldState.length-1] != undefined) {
					state = oldState[oldState.length-1];
				}
			} else {
				state = oldState[properties.restoreIndex];
			}
			oldState = [];
		}
		
		//shifting camera
		state.xmod = (-state.player.pos.x)+(draw.canvas.width/2);
		state.ymod = (-state.player.pos.y)+(draw.canvas.height/2);
	}
}