// Lecture: Operators

var age = 26;
var actualYear = 2017;
var birthYear = actualYear - age;

var randomNumber = actualYear - age * 2;

// This precedence was obvious, but its not always like that.
// http://codingheroes.io/resources/ is a good reference to it

console.log(birthYear);
console.log(randomNumber);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;
console.log(ageJohn);
console.log(ageMark);
