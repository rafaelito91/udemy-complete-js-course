// Lecture if/else and comparisons

var name = 'John';
var age = 26;
var isMarried = 'yes';

if(isMarried == 'yes') {
  console.log(name + ' is married!')
} else {
  console.log(name + ' will marry soon.');
}

isMarried = false;

if(isMarried) {
  console.log('YES');
} else {
  console.log('NO!');
}

if(!isMarried) {
  console.log('FREEDOM BABY');
}

if (23 == '23') {
  console.log('Type coercion is interesting');
}

if (23 === '23') {
  console.log('Type coercion is interesting');
} else {
  console.log('This operator does not allow type coercion');
}
