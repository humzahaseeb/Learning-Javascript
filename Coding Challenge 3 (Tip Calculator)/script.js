function tipCalculator(bill){
    let percentage;
 if (bill < 50){
    return percentage = bill * 0.2;
 }
            
else if (bill >= 50 && bill <= 200){
    return percentage = bill * 0.15;
}
            
else if (bill > 200){
    return percentage = bill * 0.1;
}
    
}
            
let bills = [124, 48, 268];

let tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]),
            tipCalculator(bills[2])
            ];

let totalAmountPaid = [bills[0] + tips[0],
                      bills[1] + tips[1],
                      bills[2] + tips[2]];


console.log(tips);
console.log(totalAmountPaid);


