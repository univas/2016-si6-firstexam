var sigla = process.argv[2];

//Função utilizando IF-ELSE para verfificar as siglas pedidas
function check(sigla) {
    if (sigla =='css') { return 'cascading style sheets' }
    else if (sigla == 'tdd') { return 'test driven development' }
    else if (sigla == 'http') { return 'hypertext transfer protocol' }
    else if (sigla == 'ftp') { return 'file transfer protocol' }
    else if (sigla == 'html') { return 'hypertext markup language' }
    else if (sigla == 'js') { return 'JavaScript' }
    else if (sigla == 'css') { return 'cascading style sheets' }
    else { return 'sigla não encontrada' }
}

console.log(check(sigla));