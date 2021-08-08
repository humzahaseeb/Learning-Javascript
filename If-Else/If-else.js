/*
var fullName = 'Leo Messi';
var team = prompt('Messi plays for which team? ')

if (team === 'Barcelona'){
    console.log(' Yes, Messi plays for Barcelona');
} 
else{
    console.log("Messi doesn't play for " + team);
}

*/

// Coding Challenge 1 with if-else statement

// BMI for Mark

let heightMark = prompt("What is Mark's height in meters?");//meters
let massMark = prompt("What is Mark's weight in kgs?"); //kgs

let bmiMark = massMark / (heightMark * heightMark);
console.log(" Marks's BMI: " + bmiMark);


// BMI for John
var heightJohn = prompt("What is John's height in meters?"); // meters
var massJohn = prompt("What is John's weight in kgs?");  // kgs

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log("John's BMI: "+ bmiJohn);


if (bmiMark > bmiJohn){
    console.log("Mark's BMI is greater than John's.");
}
else{
    console.log("John's BMI is greater than Mark's.");
}













