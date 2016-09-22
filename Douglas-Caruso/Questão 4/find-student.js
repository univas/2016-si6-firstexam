const studentsDB = require("./students.json");
const matricula = process.argv[2];

for (var i = 0; i < studentsDB.length; i++){
    if (studentsDB[i].mat == matricula){
        console.log("Nome: " + studentsDB[i].name);
        console.log("Email: " + studentsDB[i].email);
    }
}