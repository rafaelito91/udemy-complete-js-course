var ageJohn = 24;
var heightJohn = 172;

var ageFriend = 23;
var heightFriend = 176;

var ageMark = 25;
var heightMark = 164;

var johnScore = heightJohn + 4 * ageJohn;
var friendScore = heightFriend + 4 * ageFriend;
var markScore = heightMark + 4 * ageMark;

console.log('John Score: ' + johnScore);
console.log('Friend Score: ' + friendScore);
console.log('Mark Score:' + markScore);

// First part of challenge
if (johnScore > friendScore) {
  alert('John Wins!!!')
} else if (johnScore === friendScore) {
  alert('Its a DRAW!')
} else {
  alert('John loses! :( )')
}

//Second part
if (johnScore > friendScore && johnScore > markScore) {
  alert('John Wins!!!')
} else if (friendScore > johnScore && friendScore > markScore) {
  alert('Friend wins')
} else if(markScore > johnScore && markScore > friendScore) {
  alert('Mark wins')
} else {
  alert('IT\'S A DRAW!!!!!')
}
