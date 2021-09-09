let Mark = {
    fullName: 'Mark Zuckerberg',
    mass: 90,
    height: 1.5,
    bmiMark : function(){  
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}



let John = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.95,
    bmiJohn : function(){  
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

Mark.bmiMark();
John.bmiJohn();

console.log(Mark, John);








