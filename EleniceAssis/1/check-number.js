function verificarParImpar(numero) {
    var numero = parseFloat(process.argv[2]);
    if (!isNaN(numero)) {
        if (numero % 2 == 0) {
            return "O valor " + numero + " é um numero par";
        } else {
            return "O valor " + numero + " é um numero impar";
        }
    }else{
        return "Erro: Informar numero válido!";
    }
}
console.log(verificarParImpar());