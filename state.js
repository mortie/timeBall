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
		'collidesWith': null,
	},
		
	'xmod': 0,
	'ymod': 0,
}

var statState = {
	'world': [],
}

var oldState = [];

var gameLoop = null;