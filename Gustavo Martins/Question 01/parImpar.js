function getNumber() {
    var number = process.argv[2];
    if(isNumber(number) && stringToNumber(number))
        parImpar(number);
    else
        console.log("Only valid numbers.");
}

function parImpar(number) {
    if(number % 2 == 0){
        console.log("O número " + number + " é um número par.");
    }else{
        console.log("O número " + number + " é um número ímpar.");
    }
}

function isNumber(number) {
    return !isNaN(number);
}

function stringToNumber(number) {
    return parseFloat(number);
}

// init
getNumber();