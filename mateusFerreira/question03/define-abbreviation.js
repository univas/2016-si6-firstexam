var cod = [
    {"Ab":"CSS","name":"Cascading Style Sheets"},
    {"Ab":"FTP","name":"File Transfer Protocol"},
    {"Ab":"HTML","name":"Hypertext Markup Language"},
    {"Ab":"HTTP","name":"The Hypertext Transfer Protocol"},
    {"Ab":"JS","name":"JavaScript"},
    {"Ab":"TDD","name":"Test Driven Development"}
    

];

(function showResult(){
   var abrev = process.argv[2];
   
   for(i =0; i< cod.length; i++){
       if(cod[i].Ab == abrev){
           console.log(cod[i].Ab+" - "+cod[i].name);
           break;
       }
   }
   
   
})();