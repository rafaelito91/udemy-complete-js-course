// Loops

function calculateAge(yearOfBirth) {
  var actualYear = 2017;
  return actualYear - yearOfBirth;
}

// Exercise 1
var yearsOfBirth = new Array(1990, 1956, 1970, 2011, 1950);

// Exercise 2
var arrayOfAges = new Array();

// Exercise 3
for (var i = 0; i < yearsOfBirth.length ; i++) {
  arrayOfAges.push(yearsOfBirth[i]);
}

// Exercise 4
for (var i = 0; i < arrayOfAges.length ; i++) {
  if (calculateAge(arrayOfAges[i]) > 18) {
    console.log('Is full age');
  } else {
    console.log('Is under age');
  }
}

// Exercise 5
var printFullAge = function(yearsOfBirth) {
  var fullAgeArray = new Array();
  for (var i = 0; i < yearsOfBirth.length ; i++) {
    if (calculateAge(yearsOfBirth[i]) > 18) {
      fullAgeArray.push(true);
    } else {
      fullAgeArray.push(false);
    }
  }
  return fullAgeArray;
}

var full_1 = printFullAge([1965, 2008, 1992]);
var full_2 = printFullAge([1951, 1991, 2016]);

console.log(full_1);
console.log(full_2);
