function abbreviation(abreviacao) {
    var abreviacao = process.argv[2];
        if (abreviacao === "CSS" || abreviacao === "css") {
            return "CSS - Cascading Style Sheets";
        }
        if (abreviacao === "PTP" || abreviacao === "ptp") {
            return "PTP - File Transfer Protocol";
        }
        if (abreviacao === "HTML" || abreviacao === "html") {
            return "HTML - Hypertext Markup Language";
        }
        if (abreviacao === "HTTP" || abreviacao === "http") {
            return "HTTP - The Hypertext Transfer Protocol";
        }
        if (abreviacao === "JS" || abreviacao === "js") {
            return "JS - JavaScript";
        }
        if (abreviacao === "TDD" || abreviacao === "tdd") {
            return "TDD - Test Driven Development";
        }
}
console.log(abbreviation());