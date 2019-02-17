class Bullet extends Phaser.Sprite {
  constructor(game, x, y, angle, speed) {
    super(game, x, y, "pew");

    this.scale.set(1.25);
    this.smoothed = false;
    this.velocity = speed || -150;
    //make centered
    this.angle = angle;
    this.anchor.setTo(0.5, 0);

    //add to the game
    game.add.existing(this);
    game.physics.enable(this);

    this.body.velocity.y = this.velocity;

    this.checkWorldBounds = true;
    this.events.onOutOfBounds.add(this.killLaser, this);
    this.animations.add("pew", [0, 1]);
    this.animations.play("pew", 10, true);
  }
  fire(x, y) {
    this.reset(x, y);
    this.animations.play("pew", 10, true);
    this.body.velocity.y = this.velocity;
    this.alive = true;
    this.visible = true;
  }

  hitEnemy() {
    this.killLaser(this);
  }
  killLaser(laser) {
    laser.kill();
  }

  update() {}
}

export default Bullet;
