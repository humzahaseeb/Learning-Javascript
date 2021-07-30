/*

// while loop

var students = ['Hamza', 'Tayyab', 'Ahmed'];

while (students.length > 0 ){

	let student = students.pop();
    console.log("Hello, " + student +"!" );

}

*/


// for loop


/*
var students = ['Hamza', 'Tayyab', 'Ahmed'];

for (i = 0; i < students.length; i++ ){
    
    console.log("Hello, " + students[i] + '!')
}


for (student of students){
    
    console.log('Hello, ' + student + '!')
}


*/



// functions


function timeRemaining (elapsedTime, endTime){
    return endTime - elapsedTime;
}

let left = timeRemaining(240, 300);
console.log(left)










