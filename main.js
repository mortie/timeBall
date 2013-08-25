var main = function() {
	worldgen.main();
	rewind.main();
	draw.main();

	if (rewind.mainShouldPhysics) {
		physics.main();
	}
	GUI.main();
	
	input.main(); //should always be last
}

