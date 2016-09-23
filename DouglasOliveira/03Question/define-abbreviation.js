          
    "use strict";
    
    const abreviationDB = require('/abbreviation.json');
    const abreviation = process.argv[2];
    console.log(abreviationDB[abreviation]);
    
