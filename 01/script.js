//Lecture: Hoisting
/*
  It was explained in the lecture that at the start of the executing
  phase, all js variables and functions are declared. However, only
  the functions are actually assigned, which means that the variables
  will be created with 'undefined' value.

  In the example below, the function is being called before its
  declaration, but the example works fine in the console. And that
  is due to the 'hoisting'.
*/
calculateAge(1999);

function calculateAge(year) {
  console.log(2017 - year);
}


/*
  Now it won't work! Why? Because its not a function declaration, it
  is a function expression. THAT IS ASSIGNED TO A VARIABLE!!! Which
  means that its hoisting will only assign "undefined" as the variable
  value.
*/
//retirement(1990);

var retirement = function(year) {
  console.log(65 - (2017 - year));
}


/* This will be undefined */
//console.log(age);
/* This will throw an error due to the fact that the variable is
not even declared */
//console.log(abdula);
var age = 23;

console.log(age);

function foo() {
  console.log(age); // undefined -> PQ? pq nesse contexto da pilha de execucao, ainda nao foi inciada a variabel
  var age = 64; // SE essa declaracao for comentada, age aqui terá o valor da variavel age global.
  console.log(age);
}
foo();
console.log(age);
