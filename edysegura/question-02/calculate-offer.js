function getPrice() {
    return parseFloat(process.argv[2])
}

function getPercentage() {
    return parseFloat(process.argv[3])
}

function calculateDiscount(price, discountPercentage) {
    return price * ((100 - discountPercentage) / 100)
}

function isNumber(number) {
    return !isNaN(number)
}

(function main() {
    var price = getPrice()
    var discountPercentage = getPercentage()
    var finalPrice = 0
    var message = "Please inform valid values such as 1799.99 15%"
    
    if(isNumber(price) && isNumber(discountPercentage)) {
        finalPrice = calculateDiscount(price, discountPercentage).toFixed(2)
        message = "The final value with " + discountPercentage + "% is " + finalPrice
    }
     
    console.log(message)
})()