function getAbbreviation() {
    return process.argv[2]
}

function findAbbrDefinition(abbreviation) {
    var abbreviations = require('./abbreviations.json')
    return abbreviations[abbreviation]
}

(function main() {
    var abbreviation = getAbbreviation()
    var abbrDefinition = findAbbrDefinition(abbreviation)
    var feedbackMessage = "Abbreviation was not found!"
    
    if(abbrDefinition) {
        feedbackMessage = abbreviation + " - " + abbrDefinition 
    }

    console.log(feedbackMessage)
})()