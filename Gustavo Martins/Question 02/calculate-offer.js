function getNumbers() {
    var valor = process.argv[2];
    var porcetagem = process.argv[3];
    if(isNumber(valor, porcetagem) && stringToNumber(valor, porcetagem))
        desconto(valor, porcetagem);
    else
        console.log("Only valid numbers.");
    
}

function desconto(valor, porcetagem) {
    var valorFinal = 0;
    valorFinal = valor-(valor*(porcetagem/100));
    console.log("O valor final com " + porcetagem + "% de desconto é R$" + valorFinal.toFixed(2));
}

function isNumber(valor, porcetagem) {
    return !isNaN(valor) && !isNaN(porcetagem);
}

function stringToNumber(valor, porcetagem) {
    return parseFloat(valor) && parseFloat(porcetagem);
}

// init
getNumbers();