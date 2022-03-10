import SolarAge from './../src/js/solarYearCalculator.js';

describe('SolarAge', () => {

  test('should succesfully create an age object with earth equating to 1', () => {
    const age = new SolarAge(1);
    expect(age.earth).toEqual(1);
    expect(age.mercury).toEqual(.24);
    expect(age.venus).toEqual(.62);
    expect(age.mars).toEqual(1.88);
    expect(age.jupiter).toEqual(11.86);
  });
});

describe('deathClock', () => {

  test('should succesfully create a yearsLeft object with jupiterDeathClock equating to 0', () => {
    const yearsLeft = new SolarAge(73);
    yearsLeft.deathClock();
    expect(yearsLeft.earthAverageLifeSpan).toEqual(73);
    expect(yearsLeft.earthDeathClock).toEqual(0);
    expect(yearsLeft.mercuryDeathClock).toEqual(0);
    expect(yearsLeft.venusDeathClock).toEqual(0);
    expect(yearsLeft.marsDeathClock).toEqual(0);
    expect(yearsLeft.jupiterDeathClock).toEqual(0);
  });
});

describe('deathClock', () => {

  test('should succesfully create a yearsLeft object with jupiterExtraYears equating close to 11.86', () => {
    const bonusYears = new SolarAge(74);
    bonusYears.deathClock();
    expect(bonusYears.earthExtraYears).toBeCloseTo(1);
    expect(bonusYears.mercuryExtraYears).toBeCloseTo(.24);
    expect(bonusYears.venusExtraYears).toBeCloseTo(.62);
    expect(bonusYears.marsExtraYears).toBeCloseTo(1.88);
    expect(bonusYears.jupiterExtraYears).toBeCloseTo(11.86);
  });
});