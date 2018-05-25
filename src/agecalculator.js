//back-end

export class AgeCalculator () {

  constructor (seconds, years){
    this.seconds = seconds;
    this.years = years;
  }

  ageInSeconds(age){
    let ageSeconds = (age * 31536000);
    return ageSeconds;
  }

  differenceBetweenTwoDates(date1, date2) {
    let a = moment(date1);
    let b = moment(date2);
    let results = a.diff(b, 'seconds'); //moment.js diff to calculate difference in seconds.
    return results;
  }

  ageInMercuryYears(age){
    let mercuryAge = (Math.floor(age/.24));
    return mercuryAge;
  }

  ageInVenusYears(age){
    let venusAge = (Math.floor(age/.62));
    return venusAge;
  }

  ageInMarsYears(age){
    let marsYears = (Math.floor(age/1.88));
    return marsYears;
  }

  ageInJupiterYears(age){
    let jupiterYears = (Math.floor(age/11.86));
    return jupiterYears;
  }

  lifeExpectancy(age, planet, activityLevel){
    if (planet === "Mercury" && activityLevel === "high"){
      const expectedYears = 80;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/.24)) + "years left on" + planet);
      } else {
        let yearsSurpassed = (age - expectedYears);
        return "You have surpassed the average life expectancy by" + (yearsSurpassed);
      }
      }

    if (planet === "Mercury" && activityLevel === "low"){
      const expectedYears = 60;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/.24)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }

    if (planet === "Venus" && activityLevel === "high"){
      const expectedYears = 70;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/.62)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }

    if (planet === "Venus" && activityLevel === "low"){
      const expectedYears = 50;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/.62)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }

    if (planet === "Mars" && activityLevel === "high"){
      const expectedYears = 85;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/1.88)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }

    if (planet === "Mars" && activityLevel === "low"){
      const expectedYears = 75;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/1.88)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }

    if (planet === "Jupiter" && activityLevel === "high"){
      const expectedYears = 45;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/11.86)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }

    if (planet === "Jupiter" && activityLevel === "low"){
      const expectedYears = 35;
      if (age <= expectedYears){
        let yearsLeftOnEarth = (expectedYears - age);
        return (Math.floor(yearsLeftOnEarth/11.86)) + "years left on" + planet);
      } else {
        return "You have surpassed the average life expectancy :("
      }
      }
    }
}
