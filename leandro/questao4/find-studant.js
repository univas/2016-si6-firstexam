var students = {
   98007865:{name:'Alison Rafael Marinho Gonçalves',email:'armg.alison@gmail.com'},
   98003063:{name:'Ariane Presciliana Moreira',email:'ariane_prii@hotmail.com'},
   98008543:{name:'Auro Felipe Sampaio Mota',email:'palubo01@gmail.com'},
   98007380:{name:'Douglas de Cássio Oliveira',email:'douglinhas_uchiha@hotmail.com'},
   98007574:{name:'Douglas Eduardo Caruso',email:'doug-caruso@hotmail.com'},
   98007049:{name:'Elenice Carla Assis',email:'elenice.cassis@gmail.com'},
   98008002:{name:'Fabiano Gonçalves Lomonaco Júnior',email:'fabiano.lomonaco.junior@gmail.com'},
   98007381:{name:'Gustavo Henrique Martins',email:'gustavo_sh8@hotmail.com'},
   98001244:{name:'Jefferson Leon Pereira',email:'jeffersonleon310@yahoo.com.br'},
   98007580:{name:'Leandro Gabriel Garcia',email:'leandrolg13@yahoo.com.br'},
   98007858:{name:'Luiz Eduardo da Costa',email:'costaeduardoluiz@gmail.com'},
   98007071:{name:'Marcos Antonio Rogel Junior',email:'junior_bs192@yahoo.com.br'},
   98008063:{name:'Mateus Ferreira de Souza',email:'seraomateus@hotmail.com'},
   98007350:{name:'Matheus José Vieira Lemes',email:'matheus_lemes1996@hotmail.com'},
   98002394:{name:'Maycon Assis Fonseca Ferreira',email:'maycon.univas@gmail.com'},
   98004513:{name:'Rodrigo Neves Ottoboni Dias',email:'rodrigon@fuvs.br'},
   13001952:{name:'Sabrina Andrade Pereira',email:'saandradepereira@gmail.com'},
   98007252:{name:'Samuel Barreiro Lemes',email:'samuellemes25@gmail.com'},
   98007985:{name:'Simao Faustino Laudino',email:'simao-pf@hotmail.com'},
   98007494:{name:'Wellington da Cruz Caldeira',email:'well.caldeira@gmail.com'}, 
   98007587:{name:'Wellington de Jesus Braga',email:'wellington.braga.inatel@gmail.com'}

}

showStudentName();

function showStudentName() {
    var student = getStudent();
    if (student) {
        console.log("Nome: " + student.name);
        console.log("Email: " + student.email);
    } else {
        console.log("Aluno não encontrado.");   
    }
}

function getStudent() {
    var student = students[parseInt(getArgument())];
    return student;
}

function getArgument() {
    return process.argv[2];
}