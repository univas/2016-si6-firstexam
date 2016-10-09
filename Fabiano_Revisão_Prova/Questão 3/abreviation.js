var sigla = process.argv[2];

//Função utilizando SWITCH-CASE para verfificar as siglas pedidas
function check(sigla){
    switch(sigla){
        case 'css':
            return 'cascading style sheets';
        case 'tdd':
            return 'test driven development';
        case 'ftp':
            return 'file transfer protocol';
        case 'http':
            return 'hypertext transfer protocol';
        case 'html':
            return 'hypertext markup language';
        case 'js':
            return 'JavaScript';
        default:
            return 'Sigla não encontrada';
    }
}

console.log(check(sigla));