
// ternary operator
/*
var name = prompt("What is the name of the person?");
var age = prompt('What is the age of the person?')

age >=18 ? console.log(name + ' is eligible to drink beer.' ) : console.log(name + ' is not eligible to drink beer.' );



var drink = age>= 18 ? console.log('beer') : console.log('juice')

*/


// Switch Statements
let firstName = 'John';
var age = 28;
var job = 'teacher';

switch (job) {
        
    case 'teacher':
    console.log('John teaches students how to code.');
        break;
        
    case 'Doctor':
    console.log("He saves people's lives.");
        break;
        
    default:
    console.log('He does something else.');
        break;
    
}

switch (true){
        
    case age < 13:
    console.log('John is a teenager.');
        break;
        
    case age >= 19 && age < 25:
    console.log('John is a young man.');
        break;
    
    case age > 25:
    console.log('John is an adult');   
        break;
        
        
        
        
        
}













