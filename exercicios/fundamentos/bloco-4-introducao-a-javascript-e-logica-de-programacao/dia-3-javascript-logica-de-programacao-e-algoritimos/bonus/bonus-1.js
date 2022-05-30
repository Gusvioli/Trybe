// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

let n = 5;

let stringEstrela = "*"
let stringVazia = '';

for (let index = 0; index < n; index+=1) {
    stringVazia = stringEstrela + stringVazia;
}

for (let index = 0; index < n; index+=1) {
    console.log(stringVazia);
}