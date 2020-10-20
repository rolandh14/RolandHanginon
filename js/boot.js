var Boot = function(game){};

Boot = function() {};

Boot.prototype = {

	preload: function(){
	this.load.image('logo' , 'assets/logo.png');
    this.load.image('preloadbar' , 'assets/preloader-bar.png');

	},
	
  	create: function(){
			this.game.stage.backgroundColor = '#fff';
		
		
			this.input.maxPointers = 1
		
			if (this.game.device.desktop){
		
			  this.scale.pageAlignHorizontally = true;
			} else{

		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 800;
      this.scale.minHeight = 600;
      this.scale.maxWidth = 2048;
      this.scale.maxHeight = 1536;
      this.scale.forceLandscape = true;
      this.scale.pageAlignHorizontally = true;
      this.scale.setScreenSize(true);
	}
	
		this.game.state.start("Preload");
	}
};