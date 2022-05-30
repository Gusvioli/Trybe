console.log("----------------------------Exercicio 1----------------------------------");

function adicao(a,b) {
    return "A adição de " + a + " + " + b + " é igual a " + (a + b);
}

function subtracao(a, b) {
    return "A subtracao de " + a + " - " + b + " é igual a " + (a - b);
}

function multiplicacao(a, b) {
    return "A multiplicação de " + a + " * " + b + " é igual a " + (a * b);
}

function divisao(a, b) {
    return "A divisão de " + a + " / " + b + " é igual a " + (a / b);
}

function modulo(a, b) {
    return "o módulo de " + a + " % " + b + " é igual a " + (a % b);
}

console.log(adicao(5, 2));
console.log(subtracao(10, 21));
console.log(multiplicacao(11, 3));
console.log(divisao(100, 2));
console.log(modulo(10, 2));

console.log("----------------------------Exercicio 2----------------------------------");

const numeroUm = 554;
const numeroDois = 479;
const numerotres = 4579;

function maiorNumeroDeDois(numeroUm, numeroDois) {
    let array = [numeroUm, numeroDois];
    let numeroArray = array[0];

    for (let index = 0; index < array.length; index+=1) {
       if (array[index] > numeroArray){
           numeroArray = array[index];
        }
    }
    return "O numero maior entre " + numeroUm + " e " + numeroDois + " é " + numeroArray;
}
    

console.log(maiorNumeroDeDois(numeroUm, numeroDois));


console.log("----------------------------Exercicio 3----------------------------------");

function maiorNumeroDeTres(numeroUm, numeroDois, numerotres) {
    let array = [numeroUm, numeroDois, numerotres];
    let numeroArray = array[0];

    for (let index = 0; index < array.length; index+=1) {
       if (array[index] > numeroArray){
           numeroArray = array[index];
        }
    }
    return "O numero maior entre " + numeroUm + ", " + numeroDois + " e " + numerotres + " é " + numeroArray;
}

console.log(maiorNumeroDeTres(numeroUm, numeroDois, numerotres));

console.log("----------------------------Exercicio 4----------------------------------");

const valor = -100;

function verificarValor(valor) {
    if (valor > 0) {
        return "O valor " + valor + " é positivo.";
    }else if(valor < 0) {
        return "O valor " + valor + " é negativo.";
    }else{
        return "O valor " + valor + " é Zero.";
    }
}

console.log(verificarValor(valor));

console.log("----------------------------Exercicio 5----------------------------------");

const anguloUm = 50;
const anguloDois = 40;
const anguloTres = 80;

function verificarSeETriangulo(anguloUm, anguloDois, anguloTres) {
    if (anguloUm + anguloDois + anguloTres == 180) {
        return true;
    } else {
        return false;
    }
}

console.log(verificarSeETriangulo(anguloUm, anguloDois, anguloTres));