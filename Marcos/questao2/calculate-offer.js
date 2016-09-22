var valor = parseFloat(process.argv[2]);
var porcentagem = parseInt(process.argv[3]); 
var total;

var total = valor- (valor * (porcentagem/100)) ;

console.log("O valor final com " + porcentagem + " de desconto é " +total);