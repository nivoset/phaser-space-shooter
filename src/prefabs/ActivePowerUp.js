function makeEnum(arr) {
  let obj = {};
  arr.forEach((v, i) => {
    obj[v] = v; //Symbol(v);
    obj[i] = v; //Symbol(v);
  });
  obj.keys = arr;
  obj.length = arr.length;
  return Object.freeze(obj);
}

const PU = {
  NONE: 0,
  SPREAD: 1,
  MULTI: 2,
  FREE_LIFE: 3,
  TOTAL: 4
};

const POWER_UPS = makeEnum(["MULTI", "FREE_LIFE"]);

class ActivePowerUp {
  constructor(game) {
    this.game = game;
    const self = this;
    POWER_UPS.keys.forEach(k => {
      self[k] = POWER_UPS[k];
    });
    this.keys = POWER_UPS.keys;
  }
  getRandom() {
    return POWER_UPS[this.game.rnd.integerInRange(0, POWER_UPS.length - 1)];
  }
}

export default ActivePowerUp;
