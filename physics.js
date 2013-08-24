var physics = {
	'main': function() {
		this.player();
		this.misc();
	},
	
	'player': function() {
		var propKey = properties.key;

		var accX = false;
		var accY = false;
		
		if (input.keyPressed[propKey.up]) {
			state.player.vel.y -= properties.player.acceleration;
			accY = true;
		}
		if (input.keyPressed[propKey.left]) {
			state.player.vel.x -= properties.player.acceleration;
			accX = true;
		}
		if (input.keyPressed[propKey.right]) {
			state.player.vel.x += properties.player.acceleration;
			accX = true;
		}
		if (input.keyPressed[propKey.down]) {
			state.player.vel.y += properties.player.acceleration;
			accY = true;
		}
		
		if (!accX) {
			if (state.player.vel.x > 0) {
				state.player.vel.x -= properties.player.acceleration;
			} else if (state.player.vel.x < 0){
				state.player.vel.x += properties.player.acceleration;
			}
		}
		if (!accY) {
			if (state.player.vel.y > 0) {
				state.player.vel.y -= properties.player.acceleration;
			} else if (state.player.vel.y < 0) {
				state.player.vel.y += properties.player.acceleration;
			}
		}
		
		state.player.pos.x += state.player.vel.x;
		state.player.pos.y += state.player.vel.y;
	},
	
	'misc': function() {
		if (input.onKeyDown[properties.key.restore]) {
			console.log("restoring");
			state = oldState[properties.restoreIndex];
		}
	}
}