function valorDesconto() {
    
    var valor = process.arg[2];
    var porcentagemDesc = process.arg[3];
    
    porcentagemDesc = valor * 0.1;
    console.log("Valor final: " + porcentagemDesc);
}

valorDesconto();