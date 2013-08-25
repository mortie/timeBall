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
	'backgroundMusic': null,
}

var oldState = [];

var gameLoop = null;