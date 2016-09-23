//Utilizando o pokemonDB como base ensinado na aula
//Procurando e imprimindo o objeto do JSON 
const students = require("./students.json");
const num = process.argv[2] - 1;
console.log(students[num]);
