
function mostrarNome(sigla){
    
   var sigla = new Array(6);
    sigla[0] = "JS";
    sigla[1] = "HTML";
    sigla[2] = "CSS";
    sigla[3] = "HTTP";
    sigla[4] = "TDD";
    sigla[5] = "FTP";
   
   switch (sigla) {
  case "JS":
    console.log("Java Script " + sigla);
    break;
    
 case "HTML":
    console.log("Hypertext Markup Language");
    break;
    
  case "CSS":
    console.log("Cascading Style Sheets");
    break;  
    
  case "HTTP":
    console.log("The Hypertext Transfer Protocol");
    break;  
    
 case "TDD":
    console.log("Test Driven Development");
    break;  
    
 case "FTP":
    console.log("File Transfer Protocol");
    break; 
    
 default:
        console.log('default'); 
  

}

mostrarNome();
}
