"use strict";
const students = require("./students.json");
const matricula = process.argv[2];

const result = studentPorMat(matricula);

if(result != null){
    console.log("Nome: " + result.nome);
    console.log("E-Mail: " + result.email);
}

function studentPorMat(matricula){
  
   for (var j=0; j < students.length; ++j) {
        
        
        if (students[j].mat == matricula) {
        return students[j];
        }
    }
}