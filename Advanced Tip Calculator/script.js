var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTip: function(){
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++){
            
            var percentage;
            var bill = this.bills;
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
    };
}
john.calcTip()    
console.log(john);
    
    
    
    
    