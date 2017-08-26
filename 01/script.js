//Lecture: Scope

/*
  This access to parent scopes is called scope chain. THere is a chain
  of scopes that are accessed from the child to its parent.
*/



// Global scope
var a = 'Hello!';
first();

// Local scopes
function first() {
  // first function scope
  // dont have access to variable c, but has access to variable a and b
  var b = 'Hi!';
  second();

  function second() {
    // second function scope
    // has access to variables a b and c
    var c = 'Hey!';
    console.log (a + b + c);
  }
}
