// First part (For John)

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            var percentage;
            var bill = this.bills[i];
                if (bill < 50){
                    percentage = 0.2;
                }
            
                else if (bill >= 50 && bill <= 200){
                    percentage = 0.15;
                }
            
                else {
                    percentage = 0.1;
                }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            

        }
    }
}    


// 2nd Part (For Mark)





var mark = {
    fullName: 'Mark Taylor',
    bills: [77, 375, 110, 45],
    calcTip: function(){
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            var percentage;
            var bill = this.bills[i];
                if (bill < 100){
                    percentage = 0.2;
                }
            
                else if (bill >= 100 && bill <= 300){
                    percentage = 0.1;
                }
            
                else {
                    percentage = 0.25;
                }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
            

        }
    }
}

function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i];
    }
    return sum / tips.length;
}


john.calcTip()    
mark.calcTip()
console.log(john, mark);
    













    