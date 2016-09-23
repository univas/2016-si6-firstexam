(function DefineAbbreviation(params) {
    
    (function initialize(){
        var param = getArgv()[0];
        printAbbreviation(param);
    })();
    
    function getArgv(){
       return process.argv.slice(2,3);
    }
    
    function printAbbreviation(abbreviation){
        switch(abbreviation.toUpperCase()){
            case 'CSS':
                console.log('CSS - Cascading Style Sheets');
                break;
            case 'FTP':
                console.log('FTP - File Transfer Protocol')
                break;
            case 'HTML':
                console.log('HTML - Hypertext Markup Language');
                break;
            case 'HTTP':
                console.log('HTTP -The Hypertext Transfer Protocol');
                break;
            case 'JS':
                console.log('JS - JavaScript');
                break;
            case 'TDD':
                console.log('TDD - Test Driven Development');
            default:
                console.log('We dont have this abbreviation in database.');
        }
    }
    
})();