const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0; // Função callback função que é usanda na entrada de uma função HOF podendo ser usada de uma forma separada tbm

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);
const isEven2 = numbers.find(verifyEven);// Função HOF(Height order function) ou (Função de ordem superior) que recebe uma função ou devolve uma função

console.log(isEven2); // 30