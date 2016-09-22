(function showResult() {
    
    var price = parseFloat(getPrice());
    var desc = getDesc();
   
    if (isNumber(price) && isNumber(desc)) {
        console.log("O valor final com " + desc + "% de desconto é " + calcDesconto(price, desc));
    }else{
        console.log("Insira valores válidos");
    }
    
})();

    
function isNumber(value) {
    return !isNaN(value);
}

function getPrice() {
    return process.argv[2];
}

function getDesc() {
    
    var string = process.argv[3];
    var numsStr = string.replace(/[^0-9]/g,'');
    
    return parseInt(numsStr);
}

function calcDesconto(price, desc) {
    
    var desconto = price * (desc/100);
    var final = price - desconto; 
       
    return final;
   
}