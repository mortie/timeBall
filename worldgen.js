var worldgen = {
	'lastGenX': 0,
	'lastGenY': 0,
	'lastHeight': 0,
	'lastWidth': 0,
	
	'main': function() {
		
	},
	
	'generate': function() {
		
	},
	
	'makeWorld': function(x, y, width, height) {
		this.lastGenX = x;
		this.lastGenY = y;
		this.lastHeight = height;
		this.lastWidth = width;
		
		spawn.worldRect(x, y, width, height, 0);
	},
	
	'random': function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
}