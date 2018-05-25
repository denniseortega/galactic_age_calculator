import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculator', function() {

  it ('should convert age in years into seconds', function(){
    let agecalculator = new AgeCalculator();
    expect(agecalculator.ageInSeconds(20)).toEqual(630720000);)
  });

  it ('should take two dates and determine the difference between two dates in seconds', function(){
    let agecalculator = new AgeCalculator();
    let a = [12, 25, 1994];
    let b = [05, 25, 2018];
    expect(agecalculator.differenceBetweenTwoDates(a,b)).toEqual();
  });

  it ('should return the age of a human in Mercury Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInSeconds.ageInMercury(20)).toEqual(83.33)
  });

  it ('should return the age of a human in Venus Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInSeconds.ageInVenus(20)).toEqual(32.26)
  });

  it ('should return the age of a human in Mars Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInSeconds.ageInMars(20)).toEqual(10.64)
  });

  it ('should return the age of a human in Jupiter Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInSeconds.ageInJupiter(20)).toEqual(1.69)
  });

});
