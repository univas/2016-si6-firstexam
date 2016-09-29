
function checkNumber(number) {
    if(number % 2 === 0) {
        return "even" //par
    }
    return "odd" //ímpar
}

console.log("3: " + checkNumber(3));
console.log("5: " + checkNumber(5));
console.log("2: " + checkNumber(2));
console.log("6: " + checkNumber(6));
