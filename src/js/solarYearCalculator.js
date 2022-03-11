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
    this.mercuryDeathClock = (this.earthAverageLifeSpan * .24) - this.mercury;
    this.venusDeathClock = (this.earthAverageLifeSpan * .62) - this.venus;
    this.marsDeathClock = (this.earthAverageLifeSpan * 1.88) - this.mars;
    this.jupiterDeathClock = (this.earthAverageLifeSpan * 11.86) - this.jupiter;

    this.earthExtraYears = (Math.sign(this.earthDeathClock) === -1) ? Math.abs(this.earthDeathClock) : 0;
    this.mercuryExtraYears = (Math.sign(this.mercuryDeathClock) === -1) ? Math.abs(this.mercuryDeathClock) : 0;
    this.venusExtraYears = (Math.sign(this.venusDeathClock) === -1) ? Math.abs(this.venusDeathClock) : 0;
    this.marsExtraYears = (Math.sign(this.marsDeathClock) === -1) ? Math.abs(this.marsDeathClock) : 0;
    this.jupiterExtraYears = (Math.sign(this.jupiterDeathClock) === -1) ? Math.abs(this.jupiterDeathClock) : 0;
  }
}