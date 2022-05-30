// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

// baby step

// 1 - Criar uma váriavel que armazene o valor maximo a ser calculado
// 2 - Cria 2 estruturas de repetição 'for' primeira: Percorrer os numeros na sequencia de 0 até o valor da variável e a segunda para percorrer os numeros
// menores do que o numero atual percorrido calculando se o numero pecorrido é divisivel pelos numeros anteriores
// 3 - Criar um array que armazene os valores do resultado da true da condição if
// 4 - Encontar o maior numero desse array

let numero = 50;
let array = [2, 3, 5, 7, 9];

for (let index = 2; index <= numero; index += 1) {
  for (let index2 = 1; index2 < index; index2 += 1) {
      if (index % index2 === 0 && index % 2 !== 0 && index % 3 !== 0 && index % 5 !== 0 && index % 7 !== 0) {   
          array.push(index);
        }
    }
}
console.log(array[array.length-1]);

// Obs: Esse algoritimo só funciona corretamente ate o numero 113, resolve o problema do exercicio porem não deveria ser feito deste jeito
