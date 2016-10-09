var aluno = checkStudent(process.argv[2]);

function checkStudent(aluno) {

    if (parseInt(aluno) == 98007865) { return '98007865 | Alison Rafael Marinho Gonçalves | armg.alison@gmail.com' }
    else if (parseInt(aluno) == 98003063) { return '98003063 | Ariane Presciliana Moreira | ariane_prii@hotmail.com' }
    else if (parseInt(aluno) == 98008543) { return '98008543 | Auro Felipe Sampaio Mota | palubo01@gmail.com' }
    else if (parseInt(aluno) == 98007380) { return '98007380 | Douglas de Cássio Oliveira | douglinhas_uchiha@hotmail.com' }
    else if (parseInt(aluno) == 98007574) { return '98007574 | Douglas Eduardo Caruso | doug-caruso@hotmail.com' }
    else if (parseInt(aluno) == 98007049) { return '98007049 | Elenice Carla Assis | elenice.cassis@gmail.com' }
    else if (parseInt(aluno) == 98008002) { return '98008002 | Fabiano Gonçalves Lomonaco Júnior | fabiano.lomonaco.junior@gmail.com' }
    else if (parseInt(aluno) == 98007381) { return '98007381 | Gustavo Henrique Martins | gustavo_sh8@hotmail.com' }
    else if (parseInt(aluno) == 98001244) { return '98001244 | Jefferson Leon Pereira | jeffersonleon310@yahoo.com.br' }
    else if (parseInt(aluno) == 98007580) { return '98007580 | Leandro Gabriel Garcia | leandrolg13@yahoo.com.br' }
    else if (parseInt(aluno) == 98007858) { return '98007858 | Luiz Eduardo da Costa | costaeduardoluiz@gmail.com' }
    else if (parseInt(aluno) == 98007071) { return '98007071 | Marcos Antonio Rogel Junior | junior_bs192@yahoo.com.br' }
    else if (parseInt(aluno) == 98008063) { return '98008063 | Mateus Ferreira de Souza | seraomateus@hotmail.com' }
    else if (parseInt(aluno) == 98007350) { return '98007350 | Matheus José Vieira Lemes | matheus_lemes1996@hotmail.com' }
    else if (parseInt(aluno) == 98002394) { return '98002394 | Maycon Assis Fonseca Ferreira | maycon.univas@gmail.com' }
    else if (parseInt(aluno) == 98004513) { return '98004513 | Rodrigo Neves Ottoboni Dias | rodrigon@fuvs.br' }
    else if (parseInt(aluno) == 13001952) { return '13001952 | Sabrina Andrade Pereira | saandradepereira@gmail.com' }
    else if (parseInt(aluno) == 98007252) { return '98007252 | Samuel Barreiro Lemes | samuellemes25@gmail.com' }
    else if (parseInt(aluno) == 9800798) { return '98007985 | Simao Faustino Laudino | simao-pf@hotmail.com' }
    else if (parseInt(aluno) == 98007494) { return '98007494 | Wellington da Cruz Caldeira | well.caldeira@gmail.com' }
    else if (parseInt(aluno) == 98007587) { return '98007587 | Wellington de Jesus Braga | wellington.braga.inatel@gmail.com' }
    else { return 'matricula invalida' }
}

console.log(checkStudent(aluno));
