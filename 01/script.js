// Lecture functions

function calculateAge(yearOfBirth) {
  var age = 2017 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1991);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log(ageJohn);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
  var age = calculateAge(year);
  var retirementAge = 65;
  var retirement = retirementAge - age;
  if (retirement > 0) {
    console.log(name + ' retires in ' + retirement + ' years');
  } else {
    console.log(name + ' is already retired for ' + retirement*(-1) + ' years');
  }

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
