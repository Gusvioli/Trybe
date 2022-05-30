// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// 1 - Criar uma variável que armazene o valor a ser somado.
// 2 - Crial uma variavel que quarde o valor do fatoriado
// 3 - Criar uma condição for para percorrer os numeros antecessores do numero natural a ser fatoriado e multiplicar os valores.
// 4 - Exibir o resultado

let numeroFatoriar = 4;
let fatoriado = 1;

for (let index = 1; index <= numeroFatoriar; index += 1) {
    fatoriado *= index;
}
console.log(fatoriado);



