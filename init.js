function init() {
	state.canvas = document.getElementById(properties.canvas);
	state.ctx = state.canvas.getContext("2d");
	
	loop.start('main', properties.gameSpeed, state.gameLoop);
	loop.start('saveState', properties.saveFrequency, state.saveLoop);
	
	spawn.worldRect(-200, 100, 400, 100, 0)
}

window.onLoad = init();