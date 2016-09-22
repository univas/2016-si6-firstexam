function OddEvenIdentify(){
    
    (function initialize() {
        displayResult(mountResult(getArgv()));
    })();
    
    function getArgv(){
        return process.argv.slice(2).map(num => parseInt(num));
    }
    
    function isANumber(number){
        console.log(typeof(number));
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
        console.log('NUMBERS:\n');
        result.numbers.forEach(function (oddEven) {
            console.log('type: ' + oddEven.type + '\tnumber:' + oddEven.number);
        });
    }
    
}

var oddEvenIdentify = new OddEvenIdentify();
//oddEvenIdentify.initialize();