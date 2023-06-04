let balance = 5.75;

function entrada (num1){
  return balance + num1;
}

function saída (num1){
  return balance - num1;
}

function taxa (num1){
  return balance * num1;
}

function pagFunc (num1){
  return balance / num1;
}



console.log(entrada(10));
console.log(saída(2));
console.log(taxa(1.02));
console.log(pagFunc(2));
