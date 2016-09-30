function getPrice() {
    return process.argv[2]
}

function getPercentage() {
    return process.argv[3]
}

function calculateDiscount(price, discountPercentage) {
    return 0;
}

console.log("Price: " + getPrice())
console.log("Percentage: " + getPercentage())
console.log("Final price: " + calculateDiscount())