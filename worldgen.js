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
		this.generateWorld();
		if (this.random(0, properties.worldgen.lethalChance) == 0) {
			this.generateLethalWorld();
		}
	},
	
	'generateLethalWorld': function() {
		var minWidth = properties.worldgen.lethalWidthMin;
		var maxWidth = properties.worldgen.lethalWidthMax;
		
		for (var i=0; i<=this.random(minWidth, maxWidth)+5; ++i) {
			var cX = this.lastGenX + this.lastGenWidth;
			var cY = this.lastGenY;
			var cWidth = properties.worldgen.width
			var cHeight = this.lastGenHeight;
			
			this.lastGenX = cX;
			this.lastGenY = cY;
			this.lastGenHeight = cHeight;
			this.lastGenWidth = cWidth;
			
			var lethalHeight = properties.worldgen.lethalHeight;
			
			if (i < 4) {
				spawn.lethalRect(0, 999, 0, 0);
				spawn.worldRect(cX, cY, cWidth, cHeight);
			} else {
				spawn.lethalRect(cX, cY+cHeight+(lethalHeight/2.6), cWidth, lethalHeight);
				spawn.worldRect(cX, cY, cWidth, cHeight + lethalHeight);
			}
		}
	},
	
	'generateWorld': function() {
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
				
		this.lastGenX = cX;
		this.lastGenY = cY;
		this.lastGenHeight = cHeight;
		this.lastGenWidth = cWidth;
		
		spawn.worldRect(cX, cY, cWidth, cHeight);
		spawn.lethalRect(0, 999, 0, 0);
	},
	
	'random': function(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},
}