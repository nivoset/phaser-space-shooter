class Preloader extends Phaser.State {
  constructor() {
    super();
    this.asset = null;
    this.ready = false;
  }

  preload() {
    // setup loading bar
    this.asset = this.add.sprite(
      this.game.width * 0.5 - 110,
      this.game.height * 0.5 - 10,
      "preloader"
    );
    this.load.setPreloadSprite(this.asset);

    // setup loading and its events
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.loadResources();
  }

  loadResources() {
    this.game.load.image(
      "background",
      "assets/backgrounds/desert-backgorund.png"
    );
    this.game.load.image("text_go", "assets/text_go.png");
    this.game.load.image("text_ready", "assets/text_ready.png");

    this.game.load.spritesheet(
      "SpaceShip",
      "assets/spritesheets/ship.png",
      16,
      24
    );
    this.game.load.spritesheet(
      "pew",
      "assets/spritesheets/laser-bolts.png",
      16,
      32
    );

    this.game.load.spritesheet(
      "SmallEnemy",
      "assets/spritesheets/enemy-small.png",
      16,
      16
    );
    this.game.load.spritesheet(
      "MediumEnemy",
      "assets/spritesheets/enemy-medium.png",
      32,
      16
    );
    this.game.load.spritesheet(
      "LargeEnemy",
      "assets/spritesheets/enemy-big.png",
      32,
      32
    );
    this.game.load.spritesheet(
      "Explosion",
      "assets/spritesheets/explosion.png",
      16,
      16
    );
    this.game.load.spritesheet(
      "PowerUp",
      "assets/spritesheets/power-up.png",
      16,
      16
    );
    this.game.load.audio("gunshot", "assets/gunshot.wav");
    this.game.load.audio("ding", "assets/ding.wav");
  }

  onLoadComplete() {
    this.game.state.start("game");
  }
}

export default Preloader;
