function calcularDesconto(valor, desconto) {
    var valor = parseFloat(process.argv[2]);
    var desconto = parseFloat(process.argv[3]);
    if (!isNaN(valor) && !isNaN(desconto)) {
        var valordesconto = valor * (desconto / 100);
        return "O valor final com " + desconto + "% de desconto é " + (valor - valordesconto);
    } else {
        return "Erro: Informar valores válidos";
    }
}
console.log(calcularDesconto());