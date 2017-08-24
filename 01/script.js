// lecture: Boolean logic and switch statements

var age = 25;

if (age <= 19) {
  console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
  console.log('John is a Young man');
} else {
  console.log('John is a man');
}

var job = prompt('What does John do?');

switch(job) {
  case 'teacher':
    console.log('John teaches kids');
    break;
  case 'driver':
    console.log('John Driver a Cab in Lisbon');
    break;
  case 'cop':
    console.log('John fights crime');
    break;
  default:
    console.log('John does something else');
}
