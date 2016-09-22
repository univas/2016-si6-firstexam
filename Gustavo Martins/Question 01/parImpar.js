function getNumber() {
    var number = process.argv[2];
    parImpar(number);
}

function parImpar(number) {
    if(number % 2 == 0){
        console.log("O número " + number + " é um número par.");
    }else{
        console.log("O número " + number + " é um número ímpar.");
    }
}

// init
getNumber();