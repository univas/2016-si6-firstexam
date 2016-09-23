//Criando vetor
var siglas = [];
siglas[0]= "http";
siglas[1]= "ftp";
siglas[2]= "css";
siglas[3]= "html";
siglas[4]= "js";
siglas[5]= "tdd";

var name = process.argv.slice(2);

//Verifica se existe no vetor
function verficaVetor(name){
var nome = name;
for(i=0;i<6;i++){
  if (nome == "http"){
    console.log("The Hypertext Transfer Protocol");
  }
  else if (nome == "ftp") {
    console.log("File Transfer Protocol");
  }
  else if (nome == "html") {
    console.log("Hypertext Markup Language");
  }
  else if (nome == "css") {
    console.log("Cascading Style Sheets");
  }
  else if (nome == "js") {
    console.log("Java Script");
  }
  else if (nome == "tdd") {
    console.log("Test Driven Development");
  }
}
}
