var state = {
	'player': {
		'pos': {
			'x': 0,
			'y': 0,
		},
		'vel': {
			'x': 0,
			'y': 0,
		},
		'isOnGround': false,
	},
		
	'xmod': 0,
	'ymod': 0,
}

var statState = {
	'world': [],
	'worldLethal': [],
	'backgroundMusic': null,
	'musicPlaying': true,
	'shouldPhysics': true,
	'shouldGame': true,
	'paused': false,
	'dead': false,
}

var oldState = [];

var gameLoop = null;