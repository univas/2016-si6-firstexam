(function(){
    var number = getNumber();
    
    if(!number) {
        showConsoleMessage("Please, insert a number instead anything else.");
        return;
    }
    showConsoleMessage("O numero "+ number +" é um número " + checkEvenOrOdd(number));
})();


function showConsoleMessage(msg){
    console.log(msg);
}

function getNumber(){
    var number = process.argv[2];
    
    if (number == null) return false;
    if (!validateNumber(number)) return false;
    
    
    return number;
}

function validateNumber(number){
   if(isNaN(number)){
       return false;
   }
   return true;
}

function checkEvenOrOdd(number){
    if(number % 2 == 0) return "par";
    return "impar";
}