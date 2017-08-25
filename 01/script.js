// Lecture: Objects and methods

var john = {
  name : 'John',
  lastName : 'Smith',
  yearOfBirth : 1991,
  job : 'teacher',
  isMarried : false,
  family: ['Jane', 'Mark', 'Bob'],
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};
console.log(john); // Why is age being added to the log in console if
// at this point the calculateAge method had not been called?
john.calculateAge();
console.log(john);


var mike = {
  yearOfBirth: 1950,
  calculateAge: function() {
    this.age = 2017 - this.yearOfBirth;
  }
};

mike.calculateAge();
console.log(mike);
