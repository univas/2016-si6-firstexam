(function OddEvenIdentify(){
    
    (function initialize() {
        displayResult(mountResult(getArgv()));
    })();
    
    function getArgv(){
        return process.argv.slice(2).map(num => parseInt(num));
    }
    
    function isANumber(number){
        return typeof(number) === 'number' ? true : false;
    }
    
    function isEven(number){
        return number %2 == 0 ? 'even' : 'odd';
    }
    
    function mountResult(arrayNumbers) {
        var resultObject = { 'numbers' : [] };
        arrayNumbers.forEach(function (numb) {
            if(isANumber(numb)){
                var oddEvenObject = new Object();
                oddEvenObject.number = numb;
                oddEvenObject.type = isEven(numb);
                resultObject.numbers.push(oddEvenObject);
            }
        });
        return resultObject;
    }
    
    function displayResult(result){
        console.log('\nNUMBERS:\n');
        result.numbers.forEach(function (oddEven) {
            console.log('\tnumber: ' + oddEven.number + '\ttype: ' + oddEven.type);
        });
    }
    
})();