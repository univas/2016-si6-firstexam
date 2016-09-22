(function showResult() {
    
    var num = getNumber();
    
    if(isNumber(num)){
        if(checkNumber(num)){
            console.log("O número " + num + " é par");
        }else{
            console.log("O número " + num + " é impar");
        }
    }else{
        console.log("Por favor insira um número!");
    }

})();

    
function isNumber(value) {
    return !isNaN(value);
}

function getNumber() {
    return process.argv[2];
}

function checkNumber(num) {
    if(num % 2 == 0){
        return true;
    }
    
    return false;       
}