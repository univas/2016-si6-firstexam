const studentsDB = require("./students.json");
start();

function start(){
    const matricula = process.argv[2];
    if(findStudent(matricula))
        printData(findStudent(matricula));
}

function findStudent(matricula) {
    for (var i = 0; i < studentsDB.length; i++){
        if (studentsDB[i].mat == matricula)
            return studentsDB[i];
    }
    console.log("Matricula não encontrada");
    return false;
}

function printData(student) {
    console.log("Nome: " + student.name);
    console.log("Email: " + student.email);
}

