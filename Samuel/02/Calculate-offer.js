var number = getNumber();  
var percentualInformado = getPercentual();

function getNumber() {
    return process.argv[2];
}

function getPercentual(){
    return process.argv[3];
}

function calculaPercentual(number, string){
    
    var percentual = convertStringToNumber(string);
    percentual /= 100;    
    return ((1-percentual) * number);
}

function convertStringToNumber(string) {
    return parseFloat(string);
}

function result() {
    
    if(isNaN(number)) {
        console.log("Dados inválidos. Informe os dados conforme o exemplo, um número e um percentual de desconto: 1500.00 10% ");
    } else {
        console.log("O valor informado com " + percentualInformado + " de desconto é " + calculaPercentual(number, percentualInformado));
    }
}

result();