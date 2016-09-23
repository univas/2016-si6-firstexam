function Students(nome, matricula){ 
    this.nome = nome 
    this.matricula = matricula
} 

var Aluno = new Array(22);

Aluno[0]= "Alison Rafael Marinho Gonçalves"; "armg.alison@gmail.com";
Aluno[1]= "Ariane Presciliana Moreira"; "ariane_prii@hotmail.com";
Aluno[2]= "Auro Felipe Sampaio Mota";"palubo01@gmail.com";
Aluno[3]= "Douglas de Cássio Oliveira"; "douglinhas_uchiha@hotmail.com";
Aluno[4]= "Douglas Eduardo Caruso"; "doug-caruso@hotmail.com";
Aluno[5]= "Elenice Carla Assis"; "elenice.cassis@gmail.com";
Aluno[6]= "Fabiano Gonçalves Lomonaco Júnior"; "fabiano.lomonaco.junior@gmail.com";
Aluno[7]= "Gustavo Henrique Martins"; "gustavo_sh8@hotmail.com";
Aluno[8]= "Jefferson Leon Pereira"; "jeffersonleon310@yahoo.com.br";
Aluno[9]= "Leandro Gabriel Garcia"; "leandrolg13@yahoo.com.br";
Aluno[10]= "Luiz Eduardo da Costa"; "costaeduardoluiz@gmail.com";
Aluno[11]= "Marcos Antonio Rogel Junior"; "junior_bs192@yahoo.com.br";
Aluno[12]= "Mateus Ferreira de Souza"; "seraomateus@hotmail.com";
Aluno[13]= "Matheus José Vieira Lemes"; "matheus_lemes1996@hotmail.com";
Aluno[14]= "Maycon Assis Fonseca Ferreira"; "maycon.univas@gmail.com";
Aluno[15]= "Rodrigo Neves Ottoboni Dias"; "rodrigon@fuvs.br";
Aluno[16]= "Sabrina Andrade Pereira"; "saandradepereira@gmail.com";
Aluno[17]= "Samuel Barreiro Lemes"; "samuellemes25@gmail.com";
Aluno[18]= "Simao Faustino Laudino"; "simao-pf@hotmail.com";
Aluno[19]= "Wellington da Cruz Caldeira"; "well.caldeira@gmail.com";
Aluno[20]= "Wellington de Jesus Braga"; "wellington.braga.inatel@gmail.com";

var Matricula = new Array(22);

Matricula[0]= "98007865";
Matricula[1]="98003063";
Matricula[2]="98008543";
Matricula[3]="98007380";
Matricula[4]="98007574";
Matricula[5]="98007049";
Matricula[6]="98008002";
Matricula[7]="98007381";
Matricula[8]="98001244";
Matricula[9]="98007580";
Matricula[10]="98007858";
Matricula[11]="98007071";
Matricula[12]="98008063";
Matricula[13]="98007350";
Matricula[14]="98002394";
Matricula[15]="98004513";
Matricula[16]="13001952";
Matricula[17]="98007252";
Matricula[18]="98007985";
Matricula[19]="98007494";
Matricula[20]="98007587";

var Aluno;   

funtion Aluno(matricula){
    
   for(var i=0;i<22;i++){
              		
       if(Matricula[i]==matricula){
                    	
           Aluno=Aluno[i];		 
      }	
        
}	 

 Aluno ? return Aluno : alert("matricula nao cadastrada");   }
