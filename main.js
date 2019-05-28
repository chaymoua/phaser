var game = new Phaser.Game(600, 400, Phaser.AUTO);
game.state.add('stage1', demo.stage1);
game.state.start('stage1')