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
    this.earthDeathClock = this.earthAverageLifeSpan - this.earth;
    this.mercuryDeathClock = (this.earthAverageLifeSpan * .24) - (this.earth * .24);
    this.venusDeathClock = (this.earthAverageLifeSpan * .62) - (this.earth * .62);
    this.marsDeathClock = (this.earthAverageLifeSpan * 1.88) - (this.earth * 1.88);
    this.jupiterDeathClock = (this.earthAverageLifeSpan * 11.86) - (this.earth * 11.86);
  }

  eternalYears () {
    // if (Math.sign(this.earthDeathClock) === -1) {
      // const earthBonusYears = Math.abs(this.earthDeathClock);
      // return earthBonusYears;
    // }
  }
}