import PlayerBullet from "./PlayerBullet";

class PlayerBullets extends Phaser.Group {
  constructor(game, parent) {
    super(game, parent);

    game.physics.enable(this);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    this.createMultiple(5, "pew");

    this.getAll().forEach(p => {
      //p.enableBody = true;
      p.scale.set(3);
      p.body.velocity.y = 50;
      console.log(p);
    });

    this.callAll("scale.set", 3);
    this.callAll("anchor.setTo", 0.5, 0.5);
  }
  resetLaser(laser) {
    laser.alive = false;
    laser.visible = false;
  }
  fire(x, y) {
    var laser = this.getFirstExists(false);
    console.log(laser);
    if (laser) {
      laser.x = x;
      laser.y = y;
      //laser.scale.set(1.5);
      //laser.anchor.setTo(0.5, 0.5);
      laser.alive = true;
      laser.enable = true;
      laser.body.velocity.y = -this.velocity;
      laser.visible = true;
    }
  }
}

export default PlayerBullets;
