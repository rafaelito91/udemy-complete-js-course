// Objects and Properties


var arr = [1,2,3];
// In order to access the value 2, you need to user arr[1]. Wouldn't
// it be better if you could access it by its name, like 'age' for
// example. Objects do this.

// Object literal declaration
var john = {
  name : 'John',
  lastName : 'Smith',
  yearOfBirth : 1999,
  job : 'teacher',
  isMarried : false
};
// ORDER DOES NOT MATTER
console.log(john);
console.log(john.lastName);
console.log(john['job']);

var xyz = 'yearOfBirth';
console.log(john[xyz]);

// data mutation
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);
