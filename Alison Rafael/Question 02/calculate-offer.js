(function CalculateOffer(){
    
    (function initialize() {
         var enteredNumbers = getArgv();
         var offers = calculateOffers(enteredNumbers);
         var discount = enteredNumbers[getIndexPercent(enteredNumbers)];
         displayResult(offers, discount);
    })();
    
    function getArgv(){
       return process.argv.slice(2);
    }
    
    function getIndexPercent(arrayNumbers){
        var percentIndex;
        arrayNumbers.forEach(function(number, index, array){
            if(number.toString().search('%') >= 0){
                percentIndex = index;
            }
        });
        return percentIndex;
    }
    
    function removePercentParam(arrayNumbers) {
        var newArrayNumbers = [];
        arrayNumbers.forEach(function(number, index, array){
            if(number.toString().search('%') < 0){
                newArrayNumbers.push(number);
            }
            array[index] = parseFloat(number);
        });
        return newArrayNumbers;
    }
    
    function calculateOffers(arrayNumbers) {
        var numbers = getArgv();
        var percent = parseInt(numbers[getIndexPercent(numbers)]);
        var numbers = removePercentParam(numbers);
        var offers = [];
        numbers.forEach(function (nubmer) {
            var offer = nubmer - calcDiscount(nubmer, percent);
            offers.push(offer);
        });
        
        return offers;
    }
    
    function calcDiscount(number, percent){
        number = number/100;
        return (number * percent);
    }
    
    function displayResult(arrayNumbers, discount) {
        console.log("\nResultado do desconto para os valores informados:\n");
        arrayNumbers.forEach(function (number) {
            console.log("o valor final com " + discount + " de desconto é " + number);
        })
    }
    
    
})();