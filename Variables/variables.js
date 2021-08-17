/*******************************
*    Variables and Datatypes   *
********************************/


var firstName = 'Lionel';
console.log(firstName);

var lastName = 'Messi';
console.log(lastName);

var age = 33;
console.log(age);

var fullAge = true;
console.log(fullAge);

var GOAT;
console.log(GOAT);

GOAT = 'Lionel Messi';
console.log(GOAT);


/**************************************** 
                                        *    
Variables shouldn't be named like this  *   
                                        *            
var if = "hamza";                       *
var 3years = 'hsbxjan';                 *
var jon/mark = 'jon and mark'           *    
                                        *    
*****************************************/




/**************************************
* Variable Mutation and type coercion *
**************************************/


// Type Coercion
/*
var fullName, age, team, GOAT

fullName = 'Lionel Messi';
age = 33;
team = 'FC Barcelona';
GOAT = true; */
/*
console.log(fullName + ' is ' + age + ' years old. ' + 'Which team does he play for? ' + team + '.' + ' Is he the Greatest of all time? ' + GOAT );
*/
/*
fullName = 'Cristiano Ronaldo';
age = 35;
team = 'Juventus';
GOAT = false;

console.log(fullName + ' is ' + age + ' years old. ' + 'Which team does he play for? ' + team + '.' + ' Is he the Greatest of all time? ' + GOAT );


fullName = 'Neymar';
age = 28;
team = 'Paris Saint Germain';


console.log(fullName + ' is ' + age + ' years old. ' + 'Which team does he play for? ' + team + '.');

*/


// Variable Mutation

/*

alert(fullName + ' is ' + age + ' years old. ' + 'Which team does he play for? ' + team + '.' + ' Is he the Greatest of all time? ' + GOAT );


var BallonDors = prompt("How many Ballon D'ors he has won?")
console.log(fullName + ' has won ' + BallonDors + " Ballon D'ors")


*/




/******************************
    Operater Precedence       *
*******************************/



let now = 2020;
let yearMessi = 1987;
let fullAge = 20;

let isFullAge = now - yearMessi >= fullAge
console.log(isFullAge);

let ageMessi = now - yearMessi;
let ageRonaldo = 35

let averageAge = (ageMessi + ageRonaldo) / 2
console.log(averageAge);




































