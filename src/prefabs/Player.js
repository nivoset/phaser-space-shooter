import Bullets from "./Bullets";

class Player extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, "SpaceShip", 2);
    this.scale.set(2);
    this.smoothed = false;
    this.triggeredFire = false;
    this.wasMoving;

    this.activePowerUp = 0;

    this.bullets = new Bullets(this.game);
    this.setupAnimations();

    this.velocity = 250;
    //make centered
    this.anchor.setTo(0.5, 0.0);

    //add to the game
    game.add.existing(this);
    game.physics.enable(this);

    this.body.drag.x = 500;
    this.body.drag.y = 500;

    this.body.collideWorldBounds = true;

    this.animation;

    this.game = game;

    this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  }

  setupAnimations() {
    const anim = this.animations;

    //Going right!
    //anim.add("left-end", [0, 5]);
    anim.add("left", [1, 6], 5, false);

    anim.add("right", [3, 8], 10, false);
    //anim.add("right-end", [4, 9]);

    anim.add("idle", [2, 7]);

    window.anim = anim;
  }

  update() {
    //this.game.debug.body(this);
    const keyboard = this.game.input.keyboard;
    const cursors = this.game.input.keyboard.createCursorKeys();

    if (this.isLeftDirection(cursors, keyboard)) {
      this.body.velocity.x = -this.velocity;
      this.animations.play("left");
    } else if (this.isRightDirection(cursors, keyboard)) {
      this.body.velocity.x = this.velocity;
      this.animations.play("right", 10, false);
    } else if (this.body.velocity.x === 0) {
      //this.body.velocity.x = 0;
      this.animations.play("idle", 10, true);
    }

    if (this.isUpDirection(cursors, keyboard)) {
      this.body.velocity.y = -this.velocity;
    } else if (this.isDownDirection(cursors, keyboard)) {
      this.body.velocity.y = this.velocity;
    } else {
      this.body.velocity.y = 0;
    }

    if (
      this.game.input.activePointer.isDown ||
      this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)
    ) {
      if (!this.triggeredFire) {
        this.bullets.fire(this.x, this.y - this.height);
        this.triggeredFire = true;
      }
    } else {
      this.triggeredFire = false;
    }
  }

  isLeftDirection(cursors, keyboard) {
    return cursors.left.isDown || keyboard.isDown(Phaser.Keyboard.A);
  }
  isRightDirection(cursors, keyboard) {
    return cursors.right.isDown || keyboard.isDown(Phaser.Keyboard.D);
  }
  isUpDirection(cursors, keyboard) {
    return cursors.up.isDown || keyboard.isDown(Phaser.Keyboard.W);
  }
  isDownDirection(cursors, keyboard) {
    return cursors.down.isDown || keyboard.isDown(Phaser.Keyboard.S);
  }
}

export default Player;
