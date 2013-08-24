var GUI = {
	'main': function() {
		if (input.onKeyDown[properties.key.pause])
		{
			clearInterval(gameLoop);
		}
	}
}