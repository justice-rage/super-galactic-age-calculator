'use strict';

export default class SolarAge {
  constructor (earth) {
    this.earth = earth;
    this.mercury = this.earth * .24;
    this.venus = this.earth * .62;
    this.mars = this.earth * 1.88;
    this.jupiter = this.earth * 11.86;
  }

  deathClock () {
    this.earthAverageLifeSpan = 73;
    this.earthDeathClock = this.earth - 73;
    this.mercuryDeathClock = (this.earth * .24) - (73 * .24);
    this.venusDeathClock = (this.earth * .62) - (73 * .62);
    this.marsDeathClock = (this.earth * 1.88) - (73 * 1.88);
    // this.jupiterDeathClock = (this.earth * .24) - (73 * .24);
  }
}