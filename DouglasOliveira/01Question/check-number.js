function checarNumeros() {
    
    var number = process.argv[2];
    
    if (number %2 == 0) {
        console.log ("Par: " + number);
    }
    
    else {
        console.log ("Impar: " + number);
    }
    
}

//iniciar
checarNumeros();