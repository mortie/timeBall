var spawn = {
	'worldRect': function(x, y, width, height, type) {
		var cObj = {
			'point': [],
			'x': x,
			'y': y,
			'type': type,
		}
		
		cObj.point[0] = {
			'x': x,
			'y': y,
		}
		cObj.point[1] = {
			'x': x+width,
			'y': y,
		}
		cObj.point[2] = {
			'x': x+width,
			'y': y+height,
		}
		cObj.point[3] = {
			'x': x,
			'y': y+height,
		}
		
		statState.world[this.getNewIndex(statState.world)] = cObj;
	},
	
	'getNewIndex': function(arr) {
		return arr.length;;
	},
}