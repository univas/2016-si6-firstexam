var school = [
        {
            "registration": "98007865",
            "name": "Alison Rafael Marinho Gonçalves",
            "email" : "armg.alison@gmail.com"
        },
        
        {
            "registration": "98003063",
            "name": "Ariane Presciliana Moreira",
            "email" : "ariane_prii@hotmail.com"
        },
        {
            "registration": "98008543",
            "name": "Auro Felipe Sampaio Mota",
            "email" : "palubo01@gmail.com"
        },
        {
            "registration": "98007380",
            "name": "Douglas de Cássio Oliveira",
            "email" : "douglinhas_uchiha@hotmail.com"
        },
        {
            "registration": "98007574",
            "name": "Douglas Eduardo Caruso",
            "email" : "doug-caruso@hotmail.com"
        },
        {
            "registration": "98007049",
            "name": "Elenice Carla Assis",
            "email" : "elenice.cassis@gmail.com"
        },
        {
            "registration": "98008002",
            "name": "Fabiano Gonçalves Lomonaco Júnior",
            "email" : "fabiano.lomonaco.junior@gmail.com"
        },
        {
            "registration": "98007381",
            "name": "Gustavo Henrique Martins",
            "email" : "gustavo_sh8@hotmail.com"
        },
        {
            "registration": "98001244",
            "name": "Jefferson Leon Pereira",
            "email" : "jeffersonleon310@yahoo.com.br"
        },
        {
            "registration": "98007580",
            "name": "Leandro Gabriel Garcia",
            "email" : "leandrolg13@yahoo.com.br"
        },
        {
            "registration": "98007858",
            "name": "Luiz Eduardo da Costa",
            "email" : "costaeduardoluiz@gmail.com"
        },
        {
            "registration": "98007071",
            "name": "Marcos Antonio Rogel Junior",
            "email" : "junior_bs192@yahoo.com.br"
        },
        {
            "registration": "98008063",
            "name": "Mateus Ferreira de Souza",
            "email" : "seraomateus@hotmail.com"
        },
        {
            "registration": "98007350",
            "name": "Matheus José Vieira Lemes",
            "email" : "matheus_lemes1996@hotmail.com"
        },
        {
            "registration": "98002394",
            "name": "Maycon Assis Fonseca Ferreira",
            "email" : "maycon.univas@gmail.com"
        },
        {
            "registration": "98004513",
            "name": "Rodrigo Neves Ottoboni Dias",
            "email" : "rodrigon@fuvs.br"
        },
        {
            "registration": "13001952",
            "name": "Sabrina Andrade Pereira",
            "email" : "saandradepereira@gmail.com"
        },
        {
            "registration": "98007252",
            "name": "Samuel Barreiro Lemes",
            "email" : "samuellemes25@gmail.com"
        },
        {
            "registration": "98007985",
            "name": "Simao Faustino Laudino",
            "email" : "simao-pf@hotmail.com"
        },
        {
            "registration": "98007494",
            "name": "Wellington da Cruz Caldeira",
            "email" : "well.caldeira@gmail.com"
        },
        {
            "registration": "98007587",
            "name": "Wellington de Jesus Braga",
            "email" : "wellington.braga.inatel@gmail.com"
        }  
    ];
    
    
    
    
var regNumber = process.argv[ 2 ];
var wasFound = false;

for(i = 0; i < school.length; i++){
    
    if(school[ i ].registration === regNumber){
        console.log("Nome: "+school[ i ].name);
        console.log("Email: "+school[ i ].email);
        wasFound = true;
        break;    
    }
    
}

if(!wasFound){
    console.log("Aluno não encontrado!!!");
}
