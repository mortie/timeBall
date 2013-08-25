var draw = {
	'ctx': null,
	'canvas': null,
	
	'main': function() {
		draw.ctx.canvas.width = window.innerWidth;
		draw.ctx.canvas.height = window.innerHeight;
		
		this.world();
		this.player();
	},
	
	'player': function() {
		this.ctx.beginPath();
		this.ctx.arc(state.player.pos.x + state.xmod,
					  state.player.pos.y + state.ymod,
					  properties.player.radius, 0, 2 * Math.PI, false);
		
		this.ctx.fillStyle = "green";
		this.ctx.fill();
		this.ctx.lineWidth = 5;
		this.ctx.strokeStyle = "#003300";
		this.ctx.stroke();
		this.ctx.closePath();
	},
	
	'world': function() {
		for (var i=statState.world.length-1; i>=0; --i) {
			var cObj = statState.world[i]
			
			switch (cObj.type) {
				case 0:
					this.ctx.beginPath();
					this.ctx.moveTo(cObj.point[0].x + state.xmod,
									 cObj.point[0].y + state.ymod);
					for (var j=1; j<=3; ++j){
						this.ctx.lineTo(cObj.point[j].x + state.xmod,
										 cObj.point[j].y + state.ymod);
					}
					this.ctx.fillStyle = "#AAAAAA";
					this.ctx.fill();
					this.ctx.closePath();
					break;
			}
		}
	}
}