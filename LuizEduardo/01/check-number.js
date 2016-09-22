

function getNumber() {
    return process.argv[ 2 ];
}



function checkNumber(number) {
    return ((number % 2) === 0) ? true : false;
}



function showResult() {
    
    var number = getNumber();
    
    if(checkNumber(number)){
        console.log("O número "+ number +" é um número par!");
    }else{
        console.log("O número "+ number +" é um número ímpar!");
    }
}



showResult();