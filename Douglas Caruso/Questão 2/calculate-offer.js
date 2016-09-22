showResult();

function showResult(){
    var price = getPrice();
    var discount = getDiscount();
    console.log("O valor final com " + discount + "% de desconto é " + calculate(price, discount));
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
