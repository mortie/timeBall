var rewind = {
	'currIndex': null,
	'mainShouldPhysics': true,
	
	'main': function() {
		if (input.onKeyDown[properties.key.rewind]) {
			this.currIndex = 0;
			rewind.mainShouldPhysics = false;
		}
		
		if (input.keyPressed[properties.key.rewind] &&
			rewind.currIndex <= properties.rewindMax &&
			rewind.currIndex < oldState.length-1) { // if space is held and AND not rewinded too far
				this.rewind();
		} else  {
			rewind.saveState();
		}
		
		if (input.onKeyUp[properties.key.rewind] ||
			rewind.currIndex > properties.rewindMax ||
			rewind.currIndex >= oldState.length-1) { // on space release OR when rewinded too far
				this.mainShouldPhysics = true;
		}
	},
	
	'saveState': function() {
		oldState.unshift (jQuery.extend(true, {}, state));
		oldState.splice(properties.rewindMax, oldState.length-1);
	},
	
	'rewind': function() {
		state = oldState[this.currIndex];
		++this.currIndex;
	},
}