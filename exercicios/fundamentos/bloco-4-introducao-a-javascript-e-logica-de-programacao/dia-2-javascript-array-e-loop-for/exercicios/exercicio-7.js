// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// ao contrario do exercicio 5 a variável guardarMenor sempre vai armazenar o valor anterior se a condiçao for verdadeira ou seja o menor numero

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let guardarMenor = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > guardarMenor) {
    guardarMenor = numbers[index];
  }
}
console.log(guardarMenor);
