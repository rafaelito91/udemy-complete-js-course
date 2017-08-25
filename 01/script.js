// Lecture: Arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1999, 1968, 1948);

console.log(names);
console.log(names[0]);

names[1] = 'Ben';

console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');

console.log(john);

// Methods
console.log(john.pop());
console.log(john.shift());
console.log(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
  console.log('John is not a teacher');
} else {
  console.log('John is a teacher');
}
