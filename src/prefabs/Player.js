import PlayerBullet from "./PlayerBullet";
import PlayerBullets from "./PlayerBullets";

class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, "SpaceShip", 2);
    this.scale.set(2);
    this.smoothed = false;
    this.triggeredFire = false;

    this.PlayerBullets = new PlayerBullets(this.game);

    window.game = game;
    window.pb = this.PlayerBullets;
    this.PlayerBullets.fire(300, 300);
    console.log(this.PlayerBullets, game);

    this.animations.add("left-full", [0, 5]);
    this.animations.add("left-start", [1, 6]);
    this.animations.add("idle", [2, 7]);
    this.animations.add("right-start", [3, 8]);
    this.animations.add("right-full", [4, 9]);

    this.velocity = 250;
    //make centered
    this.anchor.setTo(0.5, 0.5);

    //add to the game
    game.add.existing(this);
    game.physics.enable(this);

    this.body.drag.x = 500;
    this.body.drag.y = 500;

    this.body.collideWorldBounds = true;

    this.animation;

    this.game = game;
  }

  update() {
    //this.game.debug.body(this);
    let cursors = this.game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.body.velocity.x = -this.velocity;
      if (this.body.checkWorldBounds()) {
        this.animations.play("left-full", 10, true);
      } else {
        this.animations.play("left-start", 10, true);
      }
    } else if (cursors.right.isDown) {
      this.body.velocity.x = this.velocity;
      if (this.body.checkWorldBounds()) {
        this.animations.play("right-full", 10, true);
      } else {
        this.animations.play("right-start", 10, true);
      }
    } else if (this.body.velocity.x === 0) {
      //this.body.velocity.x = 0;
      this.animations.play("idle", 10, true);
    }

    if (cursors.up.isDown) {
      this.body.velocity.y = -this.velocity;
    } else if (cursors.down.isDown) {
      this.body.velocity.y = this.velocity;
    } else {
      //this.body.velocity.y = 0;
    }

    if (this.game.input.activePointer.isDown) {
      if (!this.triggeredFire) {
        this.PlayerBullets.fire(this.x, this.y);
        this.triggeredFire = true;
      }
    } else {
      this.triggeredFire = false;
    }
  }
}

export default Player;
