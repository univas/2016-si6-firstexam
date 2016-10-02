const abbreviationDB = require("./abbreviation.json");
start();

function start(){
    const abbreviation = process.argv[2];
    if(findAbbreviation(abbreviation))
        printData(abbreviation, findAbbreviation(abbreviation));
}

function findAbbreviation(abbreviation) {
    for (var i = 0; i < abbreviationDB.length; i++){
        if (abbreviationDB[i].abrev == abbreviation)
            return abbreviationDB[i];
    }
    console.log("Abreviação não encontrada");
    return false;
}

function printData(abbreviation, object) {
    console.log(abbreviation + " - " + object.descr);
}
