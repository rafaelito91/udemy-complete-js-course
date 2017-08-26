//Lecture: this keyword

/* First example: this keyword in a regular function declaration*/
/*
console.log(this);

calculateAge(1985);

function calculateAge(year) {
  console.log(2017 - year);
  console.log(this);
}
*/

/* Second example: this keyword in a method*/
var john = {
  name : 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
      // this will print the window object, because its the rule:
      // a regular function call will call window, and this is a
      // regular funcion declaration, even though it is inside a
      // method
    }

    innerFunction();
  }
}
john.calculateAge();
