showResult();

function showResult(){
    var num = getNumber();
    if(checkNum(num)){
        if(checkEven(num))
            console.log("O número " + num + " é um numero par"); 
        else
            console.log("O número " + num + " é um numero impar")           
    }else{
        console.log("Por favor, digite um numero valido");
    }
}


function checkEven(number){
    return !(number % 2);    
}

function getNumber() {
    var number = process.argv[2];
    return number;
}

function checkNum(number) {
    return !isNaN(number);
}