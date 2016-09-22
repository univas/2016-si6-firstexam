const abbreviationDB = require("./abbreviation.json");
start();

function start(){
    const abbreviation = process.argv[2];
    printData(abbreviation, findAbbreviation(abbreviation));
}

function findAbbreviation(abbreviation) {
    for (var i = 0; i < abbreviationDB.length; i++){
        if (abbreviationDB[i].abrev == abbreviation)
            return abbreviationDB[i];
    }
}

function printData(abbreviation, object) {
    console.log(abbreviation + " - " + object.descr);
}
