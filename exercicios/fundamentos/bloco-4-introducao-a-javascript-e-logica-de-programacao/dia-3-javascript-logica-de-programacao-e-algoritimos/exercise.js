// Pegar um copo
// Colocar o copo em cima da mesa
// Abrir a porta da geladeira
// Pegar o leite
// Fechar a porta da geladeira
// Colocar determinada quantidade de leite no copo
// Abrir o armário
// Pegar o achocolatado
// Fechar a porta do armário
// Colocar determinada quantidade de achocolatado no copo
// Pegar uma colher
// Mexer no copo com a colher

// baby steps:

// Adicionar o array;
// Criar uma variável com valor 0;
// Criar um loop que percorre o array;
// Incrementar a variável com o valor correspondente a cada loop;
// Criar um if com a condição da variável ser maior que 15;
// Caso a variável obedeça a condição;
// Imprimir a variável
// Caso não obedeça a condição;
// Imprimir a mensagem "valor menor que 16";

let fruits = [3, 4, 10, 1, 12];
let soma = 0;
for (let index = 0; index < fruits.length; index+=1) {
    soma += fruits[index];
}
if (soma > 15) {
    console.log(soma);
}else{
    console.log("Valor menor que 16");
}        


// Eu resolvi o problema?
//     SIM
// Havia outras maneiras de resolver o problema?
//     NÂO
// A maneira que eu escolhi foi a mais eficiente possível?
//     SIM
// Seria possível inverter ou retirar algum passo?
//     NÂO
// Se eu fosse um computador, conseguiria entender todas as intruções?
//     SIM
