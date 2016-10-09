(function showResult() {
    var numbers = getNumbers();
    var numberOne = onlyNumbers(numbers[0]);
    var numberTwo = onlyNumbers(numbers[1]);
   
    

    if(numbers.length < 2 || !isNumber(numberOne)|| !isNumber(numberTwo)) {
        console.log("Please inform at least two valid numbers!");
    }
    else {
        console.log("The final value with "+numberTwo+" % off is "+calcPercentOff(numberOne,numberTwo));
    }
})();

function onlyNumbers(string) 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

function getNumbers() {
    return process.argv.slice(2);
 
}

function isNumber(value) {
    
   return !isNaN(value);
}

function calcPercentOff(num1, num2) {
    var result = num1 * (num2* 0.01);
    return num1 - result;
}