(function showResult(){
    var number = getNumber();
    
    if(isPar(number)== true)
        console.log("The number "+number+" is even");
   
    else
        console.log("The number "+number+" is odd");
    
})();

function isPar(value){
    if(value%2 == 0) return true;
    
    return false;
}

function getNumber(){
    var number = process.argv[2];
        return number;
}