
// BMI for Mark
var heightMark = 1.5; //meters
var massMark = 90; //kgs

var bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);


// BMI for John
var heightJohn = 1.3; // meters
var massJohn = 60;  // kgs

var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

// comparing their bmis

bmi = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than John's? " + bmi);


