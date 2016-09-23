const nameDB = require("./name-studentDB.json");
const emailDB = require("./email-studentDB.json");

var matricula = process.argv[2];

nameDB.forEach(function(element) {
    var index = 0;
    if(element.match(matricula)){
        index = element.indexOf("-");
        index++;
        console.log("Nome: " + element.slice(index));
    }
}, this);

emailDB.forEach(function(element) {
    var index = 0;
    if(element.match(matricula)){
        index = element.indexOf("-");
        index++;
        console.log("Email: " + element.slice(index));
    }
}, this);