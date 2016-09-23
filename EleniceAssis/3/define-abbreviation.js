function abbreviation(abreviacao) {
    var abreviacao = process.argv[2];
    if (abreviacao === "CSS" || abreviacao === "css") {
        return "CSS - Cascading Style Sheets";
    } else
        if (abreviacao === "PTP" || abreviacao === "ptp") {
            return "PTP - File Transfer Protocol";
        } else
            if (abreviacao === "HTML" || abreviacao === "html") {
                return "HTML - Hypertext Markup Language";
            } else
                if (abreviacao === "HTTP" || abreviacao === "http") {
                    return "HTTP - The Hypertext Transfer Protocol";
                } else
                    if (abreviacao === "JS" || abreviacao === "js") {
                        return "JS - JavaScript";
                    } else
                        if (abreviacao === "TDD" || abreviacao === "tdd") {
                            return "TDD - Test Driven Development";
                        } else {
                            return "Erro: Informar uma abreviação válida";
                        }
}
console.log(abbreviation());