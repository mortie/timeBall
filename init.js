function init() {
	state.canvas = document.getElementById(properties.canvas);
	state.ctx = state.canvas.getContext("2d");
	
	loop.start('main', properties.gameSpeed, loop.gameLoop);
	loop.start('saveState', properties.saveFrequency, loop.saveLoop);
	
	spawn.worldRect(-200, -100, 400, 200, 0)
}

window.onLoad = init();