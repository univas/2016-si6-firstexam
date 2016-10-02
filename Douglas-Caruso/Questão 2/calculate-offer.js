showResult();

function showResult(){
    var price = getPrice();
    var discount = getDiscount();
    var finalPrice = calculate(price, discount);
    finalPrice = parseFloat(finalPrice.toFixed(2));
    console.log("O valor final com " + discount + "% de desconto é " + finalPrice);
}

function calculate(price, discount){
    var price = (price - price * (discount/100));
    return price;
}

function getPrice(){
    var price = process.argv[2];
    price = parseFloat(price);
    return price;
}

function getDiscount(){
    var discount = process.argv[3];
    discount = parseFloat(discount);
    return discount;
}
