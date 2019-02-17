import ActivePowerUp from "./ActivePowerUp";

class PowerUp extends Phaser.Sprite {
  constructor(game, x, y, type) {
    super(game, x, y, "PowerUp");
    this.game = game;
    game.physics.enable(this);
    this.body.velocity.y = 15;
    game.add.existing(this);
    this.setupAnimations();

    this.apu = new ActivePowerUp(game);
    this.validKeys = Object.keys(this.apu).filter(
      k => this.apu[k.toUpperCase()]
    );
    this.animations.play(
      this.validKeys.find(t => {
        return this.apu[t] === type;
      })
    );
    this.type = type;
  }
  setupAnimations() {
    this.animations.add("MULTI", [0, 1], 2, true);
    this.animations.add("FREE_LIFE", [2, 3], 2, true);
  }

  changePowerUp() {}
  update() {}
}

export default PowerUp;
