show();

function show() {
    var num = getNumber();
    if (isNaN(num)) {
        console.log("Informe um número válido.");   
    } else {
        if (num % 2 == 0) {
            console.log("O número " + num + " é um número par");
        } else {
            console.log("O número " + num + " é um número ímpar");
        }   
    }
}

function getNumber() {
    var num = getArgument()
    return parseFloat(num);
}

function getArgument() {
    return process.argv[2];
}