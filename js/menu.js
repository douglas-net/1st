var menuState = {

	create: function() {

		if (!localStorage.getItem('bestScore')) {
			 localStorage.setItem('bestScore', 0);
		}

		if (game.global.score > localStorage.getItem('bestScore')){
			localStorage.setItem('bestScore', game.global.score);
		}

		this.muteButton = game.add.button(20, 20, 'mute', this.toggleSound, this);
		this.muteButton.input.useHandCursor = true;
		if (game.sound.mute) {
			this.muteButton.frame = 1;
		}

		game.add.image(0, 0, 'background');

		var nameLabel = game.add.text(game.world.centerX, -50, 'Super Coin Box', { font: '70px Geo', fill: '#ffffff'});
		nameLabel.anchor.setTo(0.5, 0.5);
		game.add.tween(nameLabel).to( {y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

		var text = 'Score: ' + game.global.score + '\nBest score: ' + localStorage.getItem('bestScore');
		var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, text, {font: '25px Geo', fill: '#ffffff', align: 'center'});
		scoreLabel.anchor.setTo(0.5, 0.5);

		if (game.device.desktop) {
			var text = 'press the up arrow key to start';
		}
		else {
			var text = 'Touch the screen to start';
		}
		
		var startLabel = game.add.text(game.world.centerX, game.world.height-80, text, {font: '25px Geo', fill: '#ffffff'});
		startLabel.anchor.setTo(0.5, 0.5);

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(this.start, this);

		game.input.onDown.addOnce(this.start, this);
	},

	toggleSound: function(){
		game.sound.mute = !game.sound.mute;
		this.muteButton.frame = game.sound.mute ? 1:0;
	},

	start: function() {
		game.state.start('play');
	}
};