const abbreviationDB = require("./abbreviation.json");
const abbreviation = process.argv[2];

for (var i = 0; i < abbreviationDB.length; i++){
    if (abbreviationDB[i].abrev == abbreviation){
        console.log(abbreviation + " - " + abbreviationDB[i].descr);
    }
}