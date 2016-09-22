function calcularDesconto(valor, desconto) {
    var valor = parseFloat(process.argv[2]);
    var desconto = parseFloat(process.argv[3]);
    var valordesconto = valor * (desconto/100);
    return valor - valordesconto;
}
console.log(calcularDesconto());