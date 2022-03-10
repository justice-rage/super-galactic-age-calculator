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

  test('should succesfully create a yearsLeft object with earthAverageLifeSpan', () => {
    const yearsLeft = new SolarAge();
    yearsLeft.deathClock();
    expect(yearsLeft.earthAverageLifeSpan).toEqual(73);
    // expect(age.yearsLeftToLive.earthDeathClock).toEqual();
    // expect(age.yearsLeftToLive.mercuryDeathClock).toEqual(0);
    // expect(age.yearsLeftToLive.venusDeathClock).toEqual(0);
    // expect(age.yearsLeftToLive.marsDeathClock).toEqual(0);
    // expect(age.yearsLeftToLive.jupiterDeathClock).toEqual(0);
  });
});