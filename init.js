function init() {
	draw.canvas = document.getElementById(properties.canvas);
	draw.ctx = draw.canvas.getContext("2d");
	
	gameLoop = setInterval(main, 1000/properties.gameSpeed);
	
	spawn.worldRect(-300, -150, 1000, 300, 0)
}

window.onLoad = init();