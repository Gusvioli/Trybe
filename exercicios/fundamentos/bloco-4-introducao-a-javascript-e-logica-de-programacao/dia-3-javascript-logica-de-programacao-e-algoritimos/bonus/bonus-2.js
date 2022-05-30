// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let n = 5;

let stringEstrela = "*";
let stringVazia = "";

for (let index = 1; index <= n; index += 1) {
  stringVazia = stringEstrela + stringVazia;
  console.log(stringVazia);
}



