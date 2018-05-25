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


}
