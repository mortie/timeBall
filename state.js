var state = {
	'gameLoop': null,
	'saveLoop': null,
	'ctx': null,
	'canvas': null,
	
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
	
	'world': [],
	
	'xmod': 0,
	'ymod': 0,
}

var oldState = [];