var main = function() {
	draw.main();
	physics.main();
	
	input.main(); //should always be last
}

function saveState() {
	oldState.unshift (jQuery.extend(true, {}, state));
}