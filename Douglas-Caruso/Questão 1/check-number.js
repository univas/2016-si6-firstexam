showResult();

function showResult(){
    var num = getNumber();
    if(checkEven(num))
        console.log("O número " + num + " é um numero par"); 
    else
        console.log("O número " + num + " é um numero impar")       
}


function checkEven(number){
    return !(number % 2);    
}

function getNumber() {
    var number = process.argv[2];
    return number;
}