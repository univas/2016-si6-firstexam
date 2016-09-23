//calcular porcentagem em java

(function calcularDesconto(){
console.log("Informe o valor REAL , digite ENTER e depois informe a PORCENTAGEM");
var valorReal = getValorReal();
var porcentagem = getPorcentagem();
var precoComDesconto = 0;

//calcula o desconto
    precoComDesconto=(valorReal*porcentagem)/100;
    
  console.log("VALOR final com"+porcentagem+"%", "é de "+precoComDesconto);

 //retorna o preço com desconto 
  return precoComDesconto;
})();

//pega os valores de desconto e preço e chama os parses 
functionGetValores(getValorReal(),getPorcentagem())
{
    var valorReal=getValorReal()
        .map(stringToNumber)
        .numeroValido(valorReal);
        
    var porcentagem=getPorcentagem()
        .map(stringToNumber)
        .numeroValido(precoComDesconto);
}

//pega o valor informado pela pessoa do valor real
 function getValorReal(){
    return process.arg[2];
}

//pega o valor de porcentagem de desconto
function getPorcentagem(){
    return process.arg[3]
}

//parseia 
function stringToNumber(StringNumber){
    return parseFloat (StringNumber);
}

function numeroValido(valorReal,porcentagem){
    return !isNaN(valorReal,porcentagem);
}