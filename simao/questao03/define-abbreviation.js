"use strict";
const abbreviation = require("./abbreviation.json");
const codeAbbreviation = process.argv[2];
console.log(codeAbbreviation + " - " + abbreviation[codeAbbreviation]);

