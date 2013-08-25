var worldgen = {
	'lastGenX': -100,
	'lastGenY': -100,
	'lastGenHeight': 0,
	'lastGenWidth': 0,
	
	'main': function() {
		if (this.lastGenX+state.xmod < window.innerWidth) {
			this.generate();
		}
	},
	
	'generate': function() {
		var maxOffset = properties.worldgen.maxOffsetHeight;
		
		var cX = this.lastGenX + this.lastGenWidth;
		var cY = this.lastGenY + this.random(-maxOffset, maxOffset)
		var cWidth = properties.worldgen.width
		var cHeight = this.lastGenHeight + this.random(-maxOffset, maxOffset);
		
		if (cHeight < properties.worldgen.minHeight) {
			cHeight = properties.worldgen.minHeight;
		} else if (cHeight > properties.worldgen.maxHeight) {
			cHeight = properties.worldgen.maxHeight;
		}
		
		this.makeWorld(cX, cY, cWidth, cHeight);
	},
	
	'makeWorld': function(x, y, width, height) {
		this.lastGenX = x;
		this.lastGenY = y;
		this.lastGenHeight = height;
		this.lastGenWidth = width;
		
		spawn.worldRect(x, y, width, height, 0);
	},
	
	'random': function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
}