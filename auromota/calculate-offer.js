"use strict"

let price = parseFloat(process.argv[2]);
let discount = process.argv[3];
let discountValue = parseFloat(discount.replace('%', ''));

function calculatePrice(price, discountValue) {
    return price - price * discountValue / 100;
}

console.log('O valor final com ' + discount + ' de desconto é ' + calculatePrice(price, discountValue).toFixed(2));