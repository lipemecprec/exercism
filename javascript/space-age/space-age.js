//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function roundUpDec(num) {
  return Math.round(num * 100) / 100;
}

export const age = (planet, ageSeconds) => {
  let earthYear = ageSeconds / 31557600;
  switch (planet) {
    case 'mercury':
      return roundUpDec(earthYear / 0.2408467);
    case 'venus':
      return roundUpDec(earthYear / 0.61519726);
    case 'earth':
      return roundUpDec(earthYear);
    case 'mars':
      return roundUpDec(earthYear / 1.8808158);
    case 'jupiter':
      return roundUpDec(earthYear / 11.862615);
    case 'saturn':
      return roundUpDec(earthYear / 29.447498);
    case 'uranus':
      return roundUpDec(earthYear / 84.016846);
    case 'neptune':
      return roundUpDec(earthYear / 164.79132);
  }
};
