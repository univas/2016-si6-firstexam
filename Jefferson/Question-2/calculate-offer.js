var money = process.argv[2];
var disc = process.argv[3];

console.log("O valor final com " + process.argv[3] + " de desconto é " + calcDiscount(money, disc));

function calcDiscount(value, disc) {
    valueMoney = parseFloat(value);
    discMoney = parseFloat(disc);
    return valueMoney - (valueMoney * discMoney) / 100;
}