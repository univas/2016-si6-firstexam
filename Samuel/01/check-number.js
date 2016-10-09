var number = getNumber();  

function getNumber() {
    return process.argv[2];
}


function verificaParImpar(number){
    var stringResult;
    if (number%2) {
        stringResult = "O número " + number + " é um número ímpar.";
    } else {
        stringResult = "O número " + number + " é um número par.";
    }
    return stringResult;
}

function result() {
    
    if(isNaN(number)) {
        console.log("Informe um numero");
    } else {
        console.log(verificaParImpar(number));
    }
    return;
}

result();