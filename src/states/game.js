import Player from "../prefabs/Player";

class Game extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    //add background image
    this.background = this.game.add.sprite(0, 0, "background");
    this.background.height = this.game.world.height;
    this.background.width = this.game.world.width;

    // add background image
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = new Player(
      this.game,
      this.game.world.width / 2,
      this.game.world.height / 2
    );
  }

  update() {}

  endGame() {
    this.game.state.start("gameover");
  }
}

export default Game;
