
function calculateOffer() {
    var  value = process.argv[ 2 ];
    var  percentage = process.argv[ 3 ];
    
    percentage = replaceAndConvert(percentage);
    
    var  finalValue = calculateDiscount(value, percentage);
    
    console.log("O valor final com "+ percentage +"% de desconto é "+ finalValue);
}



function calculateDiscount(value, percentage) {
    return value - (value * (percentage / 100));
}



function replaceAndConvert(strValue) {
    strValue = strValue.replace("%", "");
    
    return parseInt(strValue);
}



calculateOffer();