function getNumber() {
    var number = process.argv[2];    
    if(isNumber(number) && stringToNumber(number)){
        check(number);
    }else{
        console.log("Informe um numero válido!")
    }
}


function check(number) {    
    if((number%2)==0){
        console.log("O numero " + number + " é um número par.");
    }else{
        console.log("O numero " + number + " é um número ímpar.");
    }    
}

function isNumber(number){
    return !isNaN(number);
}

function stringToNumber(number) {
    return parseInt(number);
}


//init
getNumber();