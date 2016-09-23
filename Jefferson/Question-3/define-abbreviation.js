const defineDb = require("./defineDB.json");

var abbreviation = process.argv[2];

defineDb.forEach(function(element) {
    var index = 0;
    if(element.match(abbreviation)){
        console.log(element);
    }
}, this);

