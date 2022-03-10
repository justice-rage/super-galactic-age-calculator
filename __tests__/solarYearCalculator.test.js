import SolarAge from './../src/js/solarYearCalculator.js';

describe('SolarAge', () => {

  test('should succesfully create an age object with earth', () => {
    const age = new SolarAge();
    expect(age.earth).toEqual(1);
    // expect(triangle.side2).toEqual(4);
    // expect(triangle.side3).toEqual(5);
  });
});