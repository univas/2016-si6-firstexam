function getNumber() {
    var number = process.argv[2];
    showNumber(number);
}

function showNumber(number) {
    console.log(number);
}

// init
getNumber();