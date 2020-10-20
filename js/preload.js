var Preload = function(game){};

Preload.prototype = {

	preload: function(){ 
		this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 50, 'preloadbar');
    this.splash.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);
		this.game.load.image('tile', 'assets/tile.png');
		this.game.load.image('box', 'assets/box.png');
		this.game.load.spritesheet('player', 'assets/player.png', 43, 36, 9, -2);
		

	},

	create: function(){
		this.game.state.start("Main");
	}
}