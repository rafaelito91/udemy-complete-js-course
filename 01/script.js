//Lecture: this keyword

var john = {
  name : 'John',
  yearOfBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2017 - this.yearOfBirth);
  }
}
john.calculateAge();


var mike = {
  name : 'Mike',
  yearOfBirth: 1951
}

// Method borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();

/*
  This shows that the 'this' variable is only assigned
  when the method is called. If it wasn't like that, 'this'
  would always be john object, and the method borrowing wouldn't
  be possible.
*/
