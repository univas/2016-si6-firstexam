(function(){
    
    var price = getPrice();
    if(!price){
        showConsoleMessage("Please, insert a number instead anything else in price.");
        return;        
    }
    
    var discount = getDiscount();
    if(!discount){
        showConsoleMessage("Please, insert a valid percentage in discount.");
        return;        
    }
    
    showConsoleMessage("O valor final com " + discount +"% de desconto é " + getPriceWithDiscount(price, discount).toFixed(2));
    
})();

function getPriceWithDiscount(price, discount){
    return price -= price * (discount/100);
}

function showConsoleMessage(msg){
    console.log(msg);
}

function getPrice(){
    var price = process.argv[2];
    
    if (price == null) return false;
    if(!validateNumber(price))return false;
    
    return price;
    
}

function getDiscount(){
    var discount = process.argv[3];
    
    if (discount == null) return false;
    
    discount = validateDiscount(discount);
   
    if(!discount) return false;
    if(discount > 100) return false;
    
    return discount;
}

function validateDiscount(discount){
    discount = discount.replace(/%/g,'');
    
    if(!validateNumber(discount)) return false;

    return discount;
}

function validateNumber(number){
   if(isNaN(number)){
       return false;
   }
   return true;
}