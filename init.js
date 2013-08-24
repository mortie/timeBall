function init() {
	state.ctx = document.getElementById(properties.canvas).getContext("2d");
	loop.start('main', properties.gameSpeed);
	loop.start('saveState', properties.saveFrequency)
}

window.onLoad = init();