var draw = {
	'main': function() {
		state.ctx.canvas.width = window.innerWidth;
		state.ctx.canvas.height = window.innerHeight;
		
		this.player();
	},
	
	'player': function() {
		state.ctx.beginPath();
		state.ctx.arc(state.player.pos.x+state.xmod, state.player.pos.y+state.ymod, 10, 0, 2 * Math.PI, false);
		state.ctx.fillStyle = 'green';
		state.ctx.fill();
		state.ctx.lineWidth = 5;
		state.ctx.strokeStyle = '#003300';
		state.ctx.stroke();
	},
}