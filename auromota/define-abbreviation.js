let abbreviation = process.argv[2];

function printAbbreviation(abb) {
    switch (abb) {
        case 'CSS':
            return 'CSS - Cascading Style Sheets';
        case 'FTP':
            return 'FTP - File Transfer Protocol';
        case 'HTML':
            return 'HTML - Hypertext Markup Language';
        case 'HTTP':
            return 'HTTP - The Hypertext Transfer Protocol';
        case 'JS':
            return 'JS - JavaScript';
        case 'TDD':
            return 'TDD - Test Driven Development';
        default:
            return 'Abbreviation not found.';
    }
}

console.log(printAbbreviation(abbreviation));