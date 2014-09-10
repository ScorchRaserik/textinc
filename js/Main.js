var TXT = {};

TXT.Main = function(game) {

};

TXT.Main.prototype = {

	preload: function() {
		this.load.image('border', 'assets/border.png');
		this.load.image('foodButton', 'assets/foodbutton.png');
		this.load.image('foodButton_clicked', 'assets/foodbutton_clicked.png');
	},

	create: function() {
		b1 = this.add.sprite(195, 0, 'border');
		b1.scale.setTo(1, 60);
		b2 = this.add.sprite(595, 0, 'border');
		b2.scale.setTo(1, 60);
		b3 = this.add.sprite(195, 395, 'border');
		b3.scale.setTo(40, 1);
	},
	
	update: function() {
	
	}

};