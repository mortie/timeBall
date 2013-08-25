var main = function() {
	if (statState.shouldGame) {
		worldgen.main();
		rewind.main();
		draw.main();

		if (statState.shouldPhysics) {
			physics.main();
		}
	}
	GUI.main();
	
	input.main(); //should always be last
}

