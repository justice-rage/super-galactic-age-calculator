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
  }
}