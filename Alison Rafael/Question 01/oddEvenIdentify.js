function OddEvenIdentify(){
    
    function initialize() {
        
    }
    
    function getArgv(){
        return process.argv.slice(2).map(num => parseFloat(num));
    }
    
    function isANumber(number){
        return typeof(number) == 'number' ? true : false;
    }
    
    function isEven(number){
        return number %2 == 0 ? true : false;
    }
    
    this.initialize = initialize;
}