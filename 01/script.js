// Lecture: Objects and methods

// The functtion in the object below is basically the same as:
/*
var calculateAge = function(yearOfBirth) {

}
*/

var john = {
  name : 'John',
  lastName : 'Smith',
  yearOfBirth : 1991,
  job : 'teacher',
  isMarried : false,
  family: ['Jane', 'Mark', 'Bob'],
  //Why would a provide yearOfBirth as parameter if the object has it as attribute... so...
  //calculateAge: function(yearOfBirth) {
  //  return 2017 - yearOfBirth;
  //}
  calculateAge: function() {
    return 2017 - this.yearOfBirth;
  }
};

console.log(john);
console.log(john.family[2]);
// console.log(john.calculateAge(1990));  No need for it anymore
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
