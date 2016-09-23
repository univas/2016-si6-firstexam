showOffer();

function showOffer() {
    var args = getArguments();
    var value = parseFloat(args[0]);
    var percent = parseInt(args[1].replace(/\D/g,''));
    var finalValue =  calculateOffer(value, percent);
    if (finalValue != null) console.log("O valor final com " + args[1] + " de desconto é " + finalValue.toFixed(2));
    else console.log("Os valores informados são inválidos.");
}

function calculateOffer(value, percent) {
    if (isValid(value, percent)) {
        return value - value * percent / 100; 
    }
    return null;
}

function isValid(value, percent) {
    if (isNaN(value) || isNaN(percent)) {
        return false;
    }
    return true;
}

function getArguments() {
    return process.argv.slice(2);
}