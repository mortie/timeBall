var main = function() {
	
	draw.main();
	rewind.main();
	if (rewind.mainShouldPhysics) {
		physics.main();
	}
	worldgen.main();
	GUI.main();
	
	input.main(); //should always be last
}

