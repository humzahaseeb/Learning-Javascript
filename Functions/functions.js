// Functions

function birthYear(currentAge){
    return 2020 - currentAge;
}

var messiBirthYear = birthYear(33);
var ronaldoBirthYear = birthYear(35);
var neymarBirthYear = birthYear(28);

console.log(messiBirthYear, ronaldoBirthYear, neymarBirthYear);



function yearsUntilRetirement(firstName, age){
    var retirement = 40 - age;
    
    console.log(firstName + ' retires in ' + retirement + " years.");
    
}

yearsUntilRetirement('Lionel Messi', 33);
yearsUntilRetirement('Cristiano Ronaldo', 35);
yearsUntilRetirement('Neymar Jr.', 28);





// Function Statements and Expressions


var whatDoYouDo = function(firstName, job){
    switch(job){
        case 'teacher':
            console.log(firstName + ' teaches students how to code.');
            break;
        case 'driver':
            console.log(firstName + ' drives a car in Berlin.');
            break;
        case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
        default:
            console.log(firstName + ' does something else.');
            break;
    }
}

console.log(whatDoYouDo('Hamza', 'designer'));
console.log(whatDoYouDo('Tayyab', 'teacher'));
console.log(whatDoYouDo('Ahmed', 'driver'));

















