import SolarAge from './../src/js/solarYearCalculator.js';

describe('SolarAge', () => {

  test('should succesfully create an age object with mercury', () => {
    const age = new SolarAge();
    expect(age.earth).toEqual(1);
    expect(age.mercury).toEqual(.24);
    // expect(triangle.side3).toEqual(5);
  });
});