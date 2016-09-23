process.argv[2];
process.argv[3];

console.log("O valor final com " + process.argv[3] + " de desconto é " + calcDiscount(process.argv[2], process.argv[3]));

function calcDiscount(value, disc) {
    valueMoney = parseFloat(value);
    discMoney = parseFloat(disc);
    return valueMoney - (valueMoney * discMoney) / 100;
}