var students =[
{"matricula":"98007865","name":"Alison Rafael Marinho Gonçalves","email":"armg.alison@gmail.com"},
{"matricula":"98003063","name":"Ariane Presciliana Moreira","email":"ariane_prii@hotmail.com"},
{"matricula":"98008543","name":"Auro Felipe Sampaio Mota","email":"palubo01@gmail.com"},
{"matricula":"98007380","name":"Douglas de Cássio Oliveira","email":"douglinhas_uchiha@hotmail.com"},
{"matricula":"98007574","name":"Douglas Eduardo Caruso","email":"doug-caruso@hotmail.com"},
{"matricula":"98007049","name":"Elenice Carla Assis","email":"elenice.cassis@gmail.com"},
{"matricula":"98008002","name":"Fabiano Gonçalves Lomonaco Júnior","email":"fabiano.lomonaco.junior@gmail.com"},
{"matricula":"98007381","name":"Gustavo Henrique Martins","email":"gustavo_sh8@hotmail.com"},
{"matricula":"98001244","name":"Jefferson Leon Pereira","email":"jeffersonleon310@yahoo.com.br"},
{"matricula":"98007580","name":"Leandro Gabriel Garcia","email":"leandrolg13@yahoo.com.br"},
{"matricula":"98007858","name":"Luiz Eduardo da Costa","email":"costaeduardoluiz@gmail.com"},
{"matricula":"98007071","name":"Marcos Antonio Rogel Junior","email":"junior_bs192@yahoo.com.br"},
{"matricula":"98008063","name":"Mateus Ferreira de Souza","email":"seraomateus@hotmail.com"},
{"matricula":"98007350","name":"Matheus José Vieira Lemes","email":"matheus_lemes1996@hotmail.com"},
{"matricula":"98002394","name":"Maycon Assis Fonseca Ferreira","email":"maycon.univas@gmail.com"},
{"matricula":"98004513","name":"Rodrigo Neves Ottoboni Dias","email":"rodrigon@fuvs.br"},
{"matricula":"13001952","name":"Sabrina Andrade Pereira","email":"saandradepereira@gmail.com"},
{"matricula":"98007252","name":"Samuel Barreiro Lemes","email":"samuellemes25@gmail.com"},
{"matricula":"98007985","name":"Simao Faustino Laudino","email":"simao-pf@hotmail.com"},
{"matricula":"98007494","name":"Wellington da Cruz Caldeira","email":"well.caldeira@gmail.com"},
{"matricula":"98007587","name":"Wellington de Jesus Braga","email":"wellington.braga.inatel@gmail.com"}
];

(function(){
    var register = getRegister();
    
    if(!register){
        showConsoleMessage("Please enter a valid register number.");
        return;
    }
    
    var student = findStudentByRegister(register);
    
    if(!student) {
        showConsoleMessage("There is no student with this number.");
        return;
    }
    
    showConsoleMessage("Nome: "+ student.name);
    showConsoleMessage("Email: "+ student.email);
    
})();

function findStudentByRegister(register){
   var wasFound = false;
   var student = students.filter(function(s) {
        if (s.matricula == register){
            wasFound = true;
            return true;
        }else{
            return false;
        }
    });
    
    if(!wasFound) return false;
    
    return student[0];
}

function getRegister(){
    var register = process.argv[2];
    
    
    if (register == null) return false;
    if(!validateNumber(register)) return false;
    
    return register;
}

function showConsoleMessage(msg){
    console.log(msg);
}

function validateNumber(register){
   if(isNaN(register)){
       return false;
   }
   return true;
}