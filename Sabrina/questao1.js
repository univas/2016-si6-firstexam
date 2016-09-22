function showResult(){
    var number = getNumber();
	if(isNaN(number)) console.log("Informe um numero");
	else console.log("" + parImpar(number));
};
showResult();



function getNumber() {
    var number = getArguments()
               
    return stringToNumber(number);
}

function stringToNumber(stringNumber){
    return parseFloat(stringNumber);
}

function parImpar(number){
    
   var number;
   
   if((number % 2 == 0)){
       console.log("O numero e Par");
   }
   else{
       console.log("O numero e Impar");
   }
   
}

function getArguments(){
    return process.argv[2];
}