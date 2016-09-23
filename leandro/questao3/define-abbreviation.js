var obj = {
   CSS:'Cascading Style Sheets',
   FTP:'File Transfer Protocol',
   HTML:'Hypertext Markup Language',
   HTTP:'The Hypertext Transfer Protocol',
   JS:'JavaScript',
   TDD:'Test Driven Development'
}

showAbreviationValue();

function showAbreviationValue() {
    console.log(getAbreviation());
}

function getAbreviation() {
    var value = obj[getArgument()];
    if (value) {
        return value;
    }
    return "Abreviação não encontrada.";
}

function getArgument() {
    return process.argv[2];
}