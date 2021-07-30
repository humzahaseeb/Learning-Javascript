var Hamza = {
    name: 'Hamza',
    birthYear: 1999,
    calcAge: function(){
        console.log(this);
        console.log(2020 - this.birthYear);
        
        function innerFunc(){
            console.log(this);
        }
        innerFunc()
    }
    
}

Hamza.calcAge();