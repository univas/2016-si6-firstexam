
function isEven(number) {
    if(number % 2 === 0) {
        return true;
    }
    return false;
}

function getNumberDescription(number) {
    return isEven(number) ? "even" : "odd";
}

function getNumber() {
    return process.argv[2];
}

function isNumber(number) {
    return !isNaN(number);
}

(function main() {
    var number = getNumber();
    var message = "";

    if (isNumber(number)) {
        message = "The number " + number + " is " + getNumberDescription(number);
    }
    else {
        message = "Please inform a valid number";
    }

    console.log(message);
})();