// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// // saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// // Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

// const [saudacao] = saudacoes;

// console.log(saudacao); // Olá

//#############################################################################

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// const [comida, animal, bebida] = ['gato', 'água', 'arroz'];

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

//#############################################################################

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

const [...pares] = numerosPares.filter(numero => numero % 2 === 0);

console.log(pares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo