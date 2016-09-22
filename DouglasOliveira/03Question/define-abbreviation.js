          
    "use strict";
    
    const abreviationDB = require("./abreviation.json");
    const abreviation = process.argv[2];
    console.log(abreviationDB[abreviation]);
    
