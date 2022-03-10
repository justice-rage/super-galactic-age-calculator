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

    this.earthExtraYears = (Math.sign(this.earthDeathClock) === -1) ? Math.abs(this.earthDeathClock) : this.earthDeathClock;
    this.mercuryExtraYears = (Math.sign(this.mercuryDeathClock) === -1) ? Math.abs(this.mercuryDeathClock) : this.mercuryDeathClock;
    this.venusExtraYears = (Math.sign(this.venusDeathClock) === -1) ? Math.abs(this.venusDeathClock) : this.venusDeathClock;
    // this.marsExtraYears = (Math.sign(this.marsDeathClock) === -1) ? Math.abs(this.marsDeathClock) : this.marsDeathClock;
    // this.jupiterExtraYears = (Math.sign(this.jupiterDeathClock) === -1) ? Math.abs(this.jupiterDeathClock) : this.jupiterDeathClock;


    // this.earthExtraYears = this.earthDeathClock > 0 ? Math.abs(this.earthDeathClock) : this.earthDeathClock;
  }

  // eternalYears () {
    // this.earthExtraYears = this.earthDeathClock > 0 ? Math.abs(this.earthDeathClock) : this.earthDeathClock;
  //   // this.earthExtraYears = (Math.sign(this.earthDeathClock) === -1) ? 
  //   // Math.abs(this.earthDeathClock) : this.earthDeathClock;
  //   // if (Math.sign(this.earthDeathClock) === -1) {
  //   //   const earthBonusYears = Math.abs(this.earthDeathClock);
  //   //   return earthBonusYears;
  //   // }
  // }
}