const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum= 0;
let med= 0;
let message= "";
let numMaior= 0;
let numImpares = [];

//for para verificar soma e média
//if... else para imprimir mensagem
for (let i = 0; i < numbers.length; i += 1){
  sum += numbers[i];
  med = sum/numbers.length;
}if (med > 20){
  message = "O valor da média artmética é maior que 20";
} else{
  message = "O valor da média aritmética é menor ou igual a 20";
};

//for para verificar o maior numéro da array
for (let iMaior = 0; iMaior < numbers.length; iMaior += 1){
  if (numbers[iMaior] > numMaior){
    numMaior = numbers[iMaior];
  };
};

for (let iImpar = 0; iImpar < numbers.length; iImpar += 1){
  if (numbers[iImpar] % 2 !== 0) {
    numImpares.push(numbers[iImpar]);
    };
 };



console.log(numbers);
console.log(sum);
console.log(med);
console.log(message);
console.log(numMaior);
console.log(numImpares);