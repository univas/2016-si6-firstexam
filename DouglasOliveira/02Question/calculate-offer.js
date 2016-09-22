function valorDesconto() {
    
    var valor = process.argv[2];
    var porcentagemDesc = process.argv[3];
    
    var total = valor - (valor*porcentagemDesc)/100;
    console.log("Valor final: " + total);
}

valorDesconto();