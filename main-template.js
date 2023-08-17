var mainState = {
	
	preload: function() {

		
	},

	create: function() {
		game.state.backgroundColor = '#3498db'
	},

	update: function() {
		
	}
};

var game = new Phaser.Game(500,340, Phaser.AUTO, 'gameDiv');

game.state.add('main', mainState);
game.state.start('main');