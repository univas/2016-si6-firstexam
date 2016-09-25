"use strict";
const abreviations = require("./abreviations.json");
const abreviation = process.argv[2];

const result = abreviationPorSig(abreviation);

if(result != null){
    console.log(result.sig + " - " + result.desc);
}

function abreviationPorSig(abreviation){
  
   for (var j=0; j < abreviations.length; ++j) {
        
        
        if (abreviations[j].sig == abreviation) {
        return abreviations[j];
        }
    }
}