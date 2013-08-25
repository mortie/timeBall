function init() {
	draw.canvas = document.getElementById(properties.canvas);
	draw.ctx = draw.canvas.getContext("2d");
	
	gameLoop = setInterval(main, 1000/properties.gameSpeed);
		
	//play music
	statState.backgroundMusic = new Audio('resources/background.mp3');
	statState.backgroundMusic.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);
	statState.backgroundMusic.play();
	
}

window.onLoad = init();