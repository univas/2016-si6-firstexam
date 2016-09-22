//ignora os primeiros valores NaN e pega o valor válido
  var num = process.argv.slice(2);

//Se o resto por 2 for zero == PAR
  if (num%2 == 0) {
    console.log("PAR");
//caso não == IMPAR
  }
  else{
    console.log("IMPAR");
  }
