var preco = parseFloat(process.argv[2]);
var desc = process.argv[3];

//USADO PARA FAZER O VALOR DO DESCONTO TER A PORCENTAGEM - Exemplo: STACKOVER FLOW
var desc = parseFloat(desc.replace('%', ''));

function descCalculate(preco, desc) {
       return (preco - (preco * (desc/100)));
    }

console.log('TOTAL: ' + descCalculate(preco, desc));