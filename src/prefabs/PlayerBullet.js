class PlayerBullet extends Phaser.Sprite {
  constructor(game, x, y, frame) {
    super(game, x, y, "pew", frame);

    this.scale.set(2);
    this.smoothed = false;
    this.velocity = 100;
    //make centered
    this.anchor.setTo(0.5, 0.5);

    //add to the game
    game.add.existing(this);
    game.physics.enable(this);

    this.body.velocity.y = -this.velocity;

    //this.body.collideWorldBounds = true;
  }
  fire(x, y) {
    this.x = x;
    this.y = y;
    this.z = 20;
    this.body.velocity.y = -this.velocity;
    this.alive = true;
    this.visible = true;
  }

  update() {}
}

export default PlayerBullet;
