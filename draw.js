var draw = {
	'ctx': null,
	'canvas': null,
	
	'main': function() {
		draw.ctx.canvas.width = window.innerWidth;
		draw.ctx.canvas.height = window.innerHeight;
		
		this.world();
		this.player();
		this.worldLethal();
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
		for (var i=statState.world.length-1; i>statState.world.length-properties.amountToDraw && i>=0; --i) {
			var cObj = statState.world[i]
			this.ctx.beginPath();
			this.ctx.moveTo(cObj.point[0].x + state.xmod,
							cObj.point[0].y + state.ymod);
		
			this.ctx.lineTo(cObj.point[1].x+1 + state.xmod,
							cObj.point[1].y + state.ymod);
			
			this.ctx.lineTo(cObj.point[2].x+1 + state.xmod,
							cObj.point[2].y + state.ymod);
			
			this.ctx.lineTo(cObj.point[3].x + state.xmod,
							cObj.point[3].y + state.ymod);
			
			this.ctx.fillStyle = "#9A9A9A";
			this.ctx.fill();
			this.ctx.closePath();
		}
	},

	'worldLethal': function() {
		for (var i=statState.worldLethal.length-1; i>statState.world.length-properties.amountToDraw && i>=0; --i) {
			var cObj = statState.worldLethal[i]
			this.ctx.beginPath();
			this.ctx.moveTo(cObj.point[0].x + state.xmod,
							cObj.point[0].y + state.ymod);
			
			this.ctx.lineTo(cObj.point[1].x+1 + state.xmod,
							cObj.point[1].y + state.ymod);
			
			this.ctx.lineTo(cObj.point[2].x+1 + state.xmod,
							cObj.point[2].y + state.ymod);
			
			this.ctx.lineTo(cObj.point[3].x + state.xmod,
							cObj.point[3].y + state.ymod);
			
			this.ctx.fillStyle = "#BB5757";
			this.ctx.fill();
			this.ctx.closePath();
		}
	},
}