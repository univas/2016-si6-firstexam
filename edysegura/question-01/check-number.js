
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    return false;
}

function getNumberDescription(number) {
    return isEven(number) ? "even" : "odd";
}

console.log("3: " + getNumberDescription(3));
console.log("5: " + getNumberDescription(5));
console.log("2: " + getNumberDescription(2));
console.log("6: " + getNumberDescription(6));
