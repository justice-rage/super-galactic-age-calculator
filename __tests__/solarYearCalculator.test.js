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

  test('should succesfully create a yearsLeft object with venusExtraYears equating close to .62', () => {
    const yearsLeft = new SolarAge(74);
    yearsLeft.deathClock();
    expect(yearsLeft.earthAverageLifeSpan).toEqual(73);
    expect(yearsLeft.earthDeathClock).toEqual(-1);
    expect(yearsLeft.mercuryDeathClock).toEqual(-0.23999999999999844);
    expect(yearsLeft.venusDeathClock).toEqual(-0.6200000000000045);
    expect(yearsLeft.marsDeathClock).toEqual(-1.8800000000000239);
    expect(yearsLeft.jupiterDeathClock).toEqual(-11.860000000000014);

    expect(yearsLeft.earthExtraYears).toBeCloseTo(1);
    expect(yearsLeft.mercuryExtraYears).toBeCloseTo(.24);
    expect(yearsLeft.venusExtraYears).toBeCloseTo(.62);
    // expect(yearsLeft.marsExtraYears).toBeCloseTo(1.88);
    // expect(yearsLeft.jupiterExtraYears).toBeCloseTo(11.86);
  });
});

// describe('eternalYears', () => {

//   test('should succesfully create a bonusYears object returning 1', () => {
//     const bonusYears = new SolarAge(74);
//     bonusYears.eternalYears();
//     expect(bonusYears.earthExtraYears).toEqual(1);
//   });
// });