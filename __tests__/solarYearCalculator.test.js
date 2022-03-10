import SolarAge from './../src/js/solarYearCalculator.js';

describe('SolarAge', () => {

  test('should succesfully create an age object with jupiter', () => {
    const age = new SolarAge();
    expect(age.earth).toEqual(1);
    expect(age.mercury).toEqual(.24);
    expect(age.venus).toEqual(.62);
    expect(age.mars).toEqual(1.88);
    expect(age.jupiter).toEqual(11.86);
  });
});