function getStudentCode() {
    return process.argv[2]
}

function findStudent(code) {
    var students = require('./studentsDB.json')
    var student = students.find(function search(student) {
        return student.code === code
    });
    return student
}

(function main(){
    var code = getStudentCode()
    var student = findStudent(code)
    console.log("Name: " + student.name)
    console.log("Email: " + student.email)
})()