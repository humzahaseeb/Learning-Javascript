function tipCalculator(bill){
    var percentage;
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
            
var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]), 
            tipCalculator(bills[1]),
            tipCalculator(bills[2])
            ];

var totalAmountPaid = [bills[0] + tips[0],
                      bills[1] + tips[1],
                      bills[2] + tips[2]];


console.log(tips);
console.log(totalAmountPaid);


