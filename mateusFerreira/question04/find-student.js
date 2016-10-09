var students = [
    {"mat":"98007865","name":"Alison Rafael Marinho Gonçalves","email":"armg.alison@gmail.com"},
{"mat":"98003063","name":"Ariane Presciliana Moreira","email":"ariane_prii@hotmail.com"},
{"mat":"98008543","name":"Auro Felipe Sampaio Mota","email":"palubo01@gmail.com	"},
{"mat":"98007380","name":"Douglas de Cássio Oliveira","email":"douglinhas_uchiha@hotmail.com"},
{"mat":"98007574","name":"Douglas Eduardo Caruso","email":"doug-caruso@hotmail.com	"},
{"mat":"98007049","name":"Elenice Carla Assis","email":"elenice.cassis@gmail.com"},
{"mat":"98008002","name":"Fabiano Gonçalves Lomonaco Júnior	","email":"	fabiano.lomonaco.junior@gmail.com	"},
{"mat":"98007381","name":"Gustavo Henrique Martins","email":"	gustavo_sh8@hotmail.com	"},
{"mat":"98001244","name":"Jefferson Leon Pereira","email":"	jeffersonleon310@yahoo.com.br	"},
{"mat":"98007580","name":"Leandro Gabriel Garcia","email":"	leandrolg13@yahoo.com.br	"},
{"mat":"98007858","name":"Luiz Eduardo da Costa","email":"	costaeduardoluiz@gmail.com	"},
{"mat":"98007071","name":"Marcos Antonio Rogel Junior","email":"	junior_bs192@yahoo.com.br	"},
{"mat":"98008063","name":"Mateus Ferreira de Souza","email":"seraomateus@hotmail.com	"},
{"mat":"98007350","name":"Matheus José Vieira Lemes","email":"matheus_lemes1996@hotmail.com	"},
{"mat":"98002394","name":"Maycon Assis Fonseca Ferreira","email":"maycon.univas@gmail.com	"},
{"mat":"98004513","name":"Rodrigo Neves Ottoboni Dias","email":"rodrigon@fuvs.br	"},
{"mat":"13001952","name":"Sabrina Andrade Pereira","email":"saandradepereira@gmail.com	"},
{"mat":"98007252","name":"Samuel Barreiro Lemes","email":"samuellemes25@gmail.com	"},
{"mat":"98007985","name":"Simao Faustino Laudino","email":"simao-pf@hotmail.com	"},
{"mat":"98007494","name":"Wellington da Cruz Caldeira","email":"well.caldeira@gmail.com	"},
{"mat":"98007587","name":"Wellington de Jesus Braga","email":"	wellington.braga.inatel@gmail.com	"}

    
];

(function showResult(){
   var matricula = process.argv[2];
   
   for(i =0; i< students.length; i++){
       if(students[i].mat == matricula){
           console.log("Nome: "+students[i].name);
           console.log("Nome: "+students[i].email);
           break;
       }
   }
   
   
})();

