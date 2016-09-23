//criando uma aplicação js para impares e pares


function check(){
    var number = getNumber();
    
    if(!isNaN(number)) {
           numbers.push(number);
        }
        else{
            ("  Informe um numero valido");
        }
{
    //verifica so o numero é par ou impar
}    
    if((number % 2)==0){
        console.log( +number, " É um numero par");
    }
    else{
        console.log(+number," É  um numero impar");
    }
}

//PEGA O Numero  ,chama o map pra trasformar cada elemento em numero
function getNumber(){
    var number = getArguments()
         .map(stringToNumber); 
                
    return number; 
}

 
 //trasforma o array de string em numeros
 function parsiando(stringNumber){
     
     return parseInt(stringNumber); 
     
 }

//pega o argumento passador pelo usuario
function getArguments(){
    return process.arg[2]
}