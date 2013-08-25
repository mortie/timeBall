var input = {
	'paused': false,
	'keyPressed': [],
	'onKeyDown': [],
	'onKeyUp': [],
	
	'mousePressed': false,
	'onMouseDown': false,
	'onMouseUp': false,
	'mouseX': null,
	'mouseY': null,
	
	'main': function() {
		input.onKeyDown = [];
		input.onKeyUp = [];
		input.onMouseDown = false;
		input.onMouseUp = false;
	},
}

onkeydown = function(e) {
    e=e||event //to deal with IE
    
	if (!input.keyPressed[e.keyCode]) {
		input.onKeyDown[e.keyCode] = true;
	}
	
	input.keyPressed[e.keyCode] = true;
	
    e.preventDefault();
	
	//pause handler
	if (input.keyPressed[properties.key.pause]) {
		if (input.paused) {
			gameLoop = setInterval(main, 1000/properties.gameSpeed);
			input.paused = false;
		} else {
			clearInterval(gameLoop);
			input.paused = true;
		}
	}
}

onkeyup = function(e) {
	e=e||event //to deal with IE

	input.keyPressed[e.keyCode] = false;
	input.onKeyUp[e.keyCode] = true;
	
	e.preventDefault();
}

onmousedown = function(e) {
	e=e||event //to deal with IE

	input.mousePressed = true;
	input.onMouseDown = true;
}

onmouseup = function(e) {
	e=e||event //to deal with IE
	
	input.mousePressed = false;
	input.onMouseUp = true;
}

onmousemove = function(e) {
	e=e||event //to deal with IE

	input.mouseX = e.offsetX;
	input.mouseY = e.offsetY;
}