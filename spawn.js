var spawn = {
	'worldRect': function(x, y, width, height) {
		statState.world[this.getNewIndex(statState.world)] = {
			'point': this.getPointSquare(x, y, width, height),
			'x': x,
			'y': y,
			'type': 0,
		};
	},
	
	'lethalRect': function(x, y, width, height) {
		statState.worldLethal[this.getNewIndex(statState.worldLethal)] = {
			'point': this.getPointSquare(x, y, width, height),
			'x': x,
			'y': y,
			'type': 1,
		}
 
	},
	
	'getPointSquare': function(x, y, width, height) {
		var point = [];
		point[0] = {
			'x': x,
			'y': y,
		}
		point[1] = {
			'x': x+width,
			'y': y,
		}
		point[2] = {
			'x': x+width,
			'y': y+height,
		}
		point[3] = {
			'x': x,
			'y': y+height,
		}
		return point;
	},
	
	'getNewIndex': function(arr) {
		return arr.length;;
	},
}