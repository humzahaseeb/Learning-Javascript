
// BMI for Mark
let heightMark = 1.5; //meters
let massMark = 90; //kgs

let bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);


// BMI for John
let heightJohn = 1.3; // meters
let massJohn = 60;  // kgs

let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

// comparing their bmis

bmi = bmiMark > bmiJohn;

console.log("Is Mark's BMI greater than John's? " + bmi);


