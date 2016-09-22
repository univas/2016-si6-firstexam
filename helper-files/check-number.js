function checkNumber(numero, teste) {
    
    var form = document.getElementByID("Numero: ");
    var numero = form.numero.value;
    var teste = numero % 2;
    
    if (teste == 0){
        
        form.resposta.value = "O Número é Par";
        
    } else {
        
        form.resposta.value = "O Número Impar";
        
    }
    
}

console.log (checkNumber());