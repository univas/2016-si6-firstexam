
var valor = process.argv.slice(2);
var porc = parseFloat(process.argv.slice(2));

var total = valor * (porc/100);

console.log("O valor final e: " + total);
