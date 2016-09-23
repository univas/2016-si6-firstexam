displayResult();

function displayResult() {
    if(checkNumber(getNumber()) == 0) {
        console.log("O número " + getNumber() + " é um número par");
    }
    else {
        console.log("O número " + getNumber() + " é um número impar");
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