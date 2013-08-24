var draw = {
	'main': function() {
		state.ctx.canvas.width = window.innerWidth;
		state.ctx.canvas.height = window.innerHeight;
		
		this.world();
		this.player();
	},
	
	'player': function() {
		state.ctx.beginPath();
		state.ctx.arc(state.player.pos.x + state.xmod,
					  state.player.pos.y + state.ymod,
					  10, 0, 2 * Math.PI, false);
		
		state.ctx.fillStyle = 'green';
		state.ctx.fill();
		state.ctx.lineWidth = 5;
		state.ctx.strokeStyle = '#003300';
		state.ctx.stroke();
		state.ctx.closePath();
	},
	
	'world': function() {
		for (var i=state.world.length-1; i>=0; --i) {
			var cObj = state.world[i]
			
			switch (cObj.type) {
				case 0:
					state.ctx.beginPath();
					state.ctx.moveTo(cObj.point[0].x + state.xmod,
									 cObj.point[0].y + state.ymod);
					for (var j=1; j<=3; ++j){
						state.ctx.lineTo(cObj.point[j].x + state.xmod,
										 cObj.point[j].y + state.ymod);
					}
					state.ctx.fillStyle = 'black';
					state.ctx.fill();
					state.ctx.closePath();
					break;
			}
		}
	}
}