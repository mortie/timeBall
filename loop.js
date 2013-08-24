var loop = {
	'start': function(func, freq) {
		state.gameLoop = setInterval(eval(func), 1000/freq);
	},
	
	'stop': function() {
		clearInterval(state.gameLoop);
	},
}