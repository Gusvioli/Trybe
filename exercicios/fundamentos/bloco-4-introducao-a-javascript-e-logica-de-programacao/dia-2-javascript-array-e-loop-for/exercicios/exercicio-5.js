// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// a variável guardarMaior sempre vai armazenar o valor anterior se a condiçao for verdadeira ou seja o maior numero

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let guardarMaior = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > guardarMaior) {
    guardarMaior = numbers[index];
  }
}
console.log(guardarMaior);
