(function(){
    
    var abbreviation = getAbbreviation();
    
    if(!abbreviation){
        showConsoleMessage("Please enter a valid abbreviation.");
        return;
    }
    
    showConsoleMessage(abbreviation + " - " + findAbbreviation(abbreviation));
    
})();

function getAbbreviation(){
    var abbreviation = process.argv[2];
    
    if(abbreviation == null) return false;
    
    return abbreviation.toUpperCase();
}

function showConsoleMessage(msg){
    console.log(msg);
}

function findAbbreviation(abbreviation){
    switch (abbreviation){
        case 'CSS':
            return "Cascading Style Sheets";
        case 'FTP':
            return "File Transfer Protocol";
        case 'HTML':
            return "Hypertext Markup Language";
        case 'HTTP':
            return "The Hypertext Transfer Protocol"
        case 'JS':            
            return "JavaScript";
        case 'TDD':            
            return "Test Driven Development";
        default:            
            return "Please, we do not recognize this abbreviation.";                
    }
}