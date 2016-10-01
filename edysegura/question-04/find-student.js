function getStudentCode() {
    return process.argv[2]
}

function findStudent(code) {
    var students = require('./studentsDB.json')
    var searchStudent = function(student) {
        return student.code === code
    }
    var student = students.find(searchStudent)
    return student
}

(function main(){
    var code = getStudentCode()
    var student = findStudent(code)
    if (student) {
        console.log("Name: " + student.name)
        console.log("Email: " + student.email)
    }
    else {
        console.log("Student not found!")
    }
})()