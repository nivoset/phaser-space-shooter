import Bullet from "./Bullet";
import Explosion from "./Explosion";

class Bullets extends Phaser.Group {
  constructor(game, parent, angle, speed) {
    super(game, parent);
    this.game = game;
    this.angle = angle;
    this.speed = speed;
    this.powerUp = null;

    game.physics.enable(this);
  }
  fire(x, y) {
    const laser = this.getFirstDead();
    if (laser) {
      laser.fire(x, y, this.angle, this.speed);
    } else {
      this.add(new Bullet(this.game, x, y, this.angle, this.speed));
    }
  }
  onHit(x, y) {
    console.log(new Explosion(this.game, x, y));
  }
}

export default Bullets;
