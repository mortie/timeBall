var loop = {
	'start': function(func, freq, loop) {
		loop = setInterval(eval(func), 1000/freq);
	},
	
	'stop': function() {
		clearInterval(state.gameLoop);
	},
}