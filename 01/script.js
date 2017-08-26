//Lecture: Scope

/*
  Scope chain is different from execution stack. In this case,
  the execution stack is

  global -> first -> second -> third

  but the scope chain was

  global -> first -> second
  global -> third

  which means the third function has no access to the variables of
  the second and first functions, even thougn they are in the same
  execution stack.
*/

var d = 'Hello!';
first();

function first() {
  var e = 'Hi!';
  second();

  function second() {
    var f = 'Hey!';
    third();
  }

}

function third() {
  var g = 'John';
  //console.log(f);
  console.log(d + g);
}
