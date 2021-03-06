import { AgeCalculator } from './../src/agecalculator.js';

describe('AgeCalculatorTests', function() {

  it ('should convert age in years into seconds', function(){
    let galacticagecalculator = new AgeCalculator();
    expect(galacticagecalculator.ageInSeconds(20)).toEqual(630720000);
  });

  it ('should take two dates and determine the difference between two dates in seconds', function(){
    let agecalculator = new AgeCalculator();
    let a = [12, 25, 1994];
    let b = [05, 25, 2018];
    expect(agecalculator.differenceBetweenTwoDates(a,b)).toEqual(738892800);
  });

  it ('should return the age of a human in Mercury Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInCalculator.ageInMercury(20)).toEqual(83.33);
  });

  it ('should return the age of a human in Venus Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInCalculator.ageInVenus(20)).toEqual(32.26);
  });

  it ('should return the age of a human in Mars Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInCalculator.ageInMars(20)).toEqual(10.64);
  });

  it ('should return the age of a human in Jupiter Years', function () {
      let agecalculator = new AgeCalculator();
      expect(ageInCalculator.ageInJupiter(20)).toEqual(1.69);
  });

  it ('should calculate the users life expectancy on each planet', function() {
    let agecalculator = new AgeCalculator();
    let age = 20;
    let planet = "Mercury";
    let activityLevel = "high";
    expect(ageInCalculator.lifeExpectancy(age, activityLevel)).toEqual("250"+"years left on"+planet);
  });

});
