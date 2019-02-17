class Explosion extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, "Explosion", frame);
    this.scale.set(2);
    //make centered
    this.anchor.setTo(0.5, 0.0);
    this.animations.add("explode", [0, 1, 2, 3, 4]);
    this.animations.play("explode", 10, false, true);
    //play explody sound here
    game.add.existing(this);
  }
}

export default Explosion;
