var GUI = {
	'main': function() {
		if (input.onKeyDown[properties.key.pause]) {
			statState.shouldGame = statState.paused;
			if (statState.paused) {
				statState.paused = false;
			} else {
				statState.paused = true;
			}
		}
		
		if (statState.paused) {
			this.pauseMenu();
		}
		if (statState.dead) {
			this.deathMenu();
		}
	},
	
	'pauseMenu': function() {
		draw.ctx.fillStyle='white';
		draw.ctx.font = 40 + 'px Arial';
		draw.ctx.textAlign = "center";
		draw.ctx.fillText("Your game is now paused.", draw.canvas.width/2, draw.canvas.height/2);
		draw.ctx.fillText("Press escape to unpause.", draw.canvas.width/2, (draw.canvas.height/2) + 40);
		draw.ctx.fillText("Press 'm' to toggle music.", draw.canvas.width/2, (draw.canvas.height/2) + 100);
		if (input.onKeyDown[properties.key.musicToggle]) {
			if (statState.musicPlaying) {
				statState.musicPlaying = false;
				statState.backgroundMusic.pause()
			} else {
				statState.musicPlaying = false;
				statState.backgroundMusic.play()
				statState.backgroundMusic.addEventListener('ended', function() {
					this.currentTime = 0;
					this.play();
				}, false);
			}
		}
	},
	
	'deathMenu': function() {
		draw.ctx.fillStyle='white';
		draw.ctx.font = 40 + 'px Arial';
		draw.ctx.textAlign = "center";
		draw.ctx.fillText("You died!", draw.canvas.width/2, draw.canvas.height/2);
		draw.ctx.fillText("Press escape to restart.", draw.canvas.width/2, (draw.canvas.height/2) + 40);
		draw.ctx.fillText("Score: "+Math.floor(state.player.pos.x), draw.canvas.width/2, (draw.canvas.height/2) + 80);
		if (input.onKeyDown[properties.key.restart]) {
			window.location.href = window.location.href;
		}
	},
}