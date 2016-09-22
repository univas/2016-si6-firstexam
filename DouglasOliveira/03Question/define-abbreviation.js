          
    "use strict";
    
    const abreviationDB = require("./abreviatio.json");
    const abreviation = process.argv[2];
    console.log(abreviationDB[abreviation]);
    
