displayResult();

function displayResult() {
    if(! isNaN(getNumber())){
        var number = getNumber();
        if(checkNumber() == 0) {
            console.log("O número " + number + " é um número par!");
        }
        else {
            console.log("O número " + number + " é um número impar! "); 
        }
    }
    else {
        console.log("O número é inválido!"); 
    }
}

function getNumber() {
    return convertType(process.argv[2]);
}

function convertType(value) {
    return parseFloat(value);
}

function checkNumber(number) {
    return number % 2;
}