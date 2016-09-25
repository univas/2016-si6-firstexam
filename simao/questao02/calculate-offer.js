function getNumbers(){
    var valor = process.argv[2];
    var porc = process.argv[3];
    
    if(isNumber(valor, porc) && stringToNumber(valor, porc)){
        calcPorcentagem(valor, porc);
    }else{
        console.log("Informe um número válido.")
    }
}

function isNumber(valor, porc) {
    return !isNaN(valor, porc);
}

function stringToNumber(valor, porc) {
    return parseFloat(valor, porc);
}

function calcPorcentagem(valor, porc){
   var result;
   result = valor - (valor*porc/100);
   
   showResult(porc, result);    
}

function showResult(desc, result){
    console.log("O valor final com " + desc + "% de desconto é " + result);
}

//init
getNumbers();