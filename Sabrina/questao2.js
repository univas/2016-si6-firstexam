function showResult() {
    var valor = getNumber(2);
    var desconto = getNumber(3);
	if(isNaN(valor)) {
        console.log("Informe um numero");
    } else if(isNaN(desconto)) {
        console.log("Informe um valor para o desconto");
    } else {
        console.log("Resultado " + calcularDesconto(valor, desconto));
    }
};
showResult();

function getNumber(indice) {
    var number = getArguments(indice)
    return stringToNumber(number);
}

function stringToNumber(stringNumber) {
    return parseFloat(stringNumber);
}

function calcularDesconto(valor, desconto) {
    var result;
    var total = 0;
    
    result = valor / 100;
    total = valor -(desconto * result);
    return total;
}

function getArguments(indice) {
    return process.argv[indice];
}