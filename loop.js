var loop = {
	'gameLoop': null,
	'saveLoop': null,
	'start': function(func, freq, loop) {
		loop = setInterval(eval(func), 1000/freq);
	},
	
	'stop': function(loop) {
		clearInterval(loop);
	},
}