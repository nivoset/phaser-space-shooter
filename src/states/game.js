import Player from "../prefabs/Player";
import PowerUp from "../prefabs/PowerUp";
import ActivePowerUp from "../prefabs/ActivePowerUp";

class Game extends Phaser.State {
  constructor() {
    super();
  }

  create() {
    //add background image
    this.background = this.game.add.sprite(0, 0, "background");
    this.background.height = this.game.world.height;
    this.background.width = this.game.world.width;

    this.powerUps = new ActivePowerUp(this);

    // add background image
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.player = new Player(
      this.game,
      this.game.world.width / 2,
      this.game.world.height / 2
    );

    this.powerUp = new PowerUp(this.game, 50, 50, this.powerUps.getRandom());
  }

  update() {
    let self = this;
    this.game.physics.arcade.overlap(
      this.player.bullets,
      this.powerUp,
      function(powerUp, bullet) {
        powerUp.changePowerUp();
        console.log(self.player.bullets);
        self.player.bullets.onHit(bullet.x, bullet.y);
        bullet.kill();
      }
    );
  }

  endGame() {
    this.game.state.start("gameover");
  }
}

export default Game;
