// // 2 tipo primitivos = Referencia e Valor
// // Tipo de variavel = String, numero, booleano, indefinida e nula

// let movie = "Avangers"; // Literal string
// let score = 10; //Numero literal
// let isValid = true; // Boolean
// let name; // Indefinida
// let color = null; // Nula redefinição de valor

// // a tipagem do JavaScript é dinamica

// let salary = 3500;

// // console.log(salary + salary);
// // console.log(salary - salary);
// // console.log(salary * salary);
// // console.log(salary / salary);
// // console.log(3 ** 3);

// // salary++;
// salary--;

// console.log(salary);

// 'let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);'

// const Base = 5;
// let height = 8;
// const area = Base * height;
// const perimeter = Base + height + Base + height;

// console.log(perimeter);

// Nessa aula eu aprendi que existe 2 tipos primitivo o tipo referencia e o tipo valor, aprendi também que os tipos de variaveis são:
// literal String, literal numero, Boolean, indefinido, nulo; aprendi que a tipagem do java script é dinâmica ou seja o javascript reconhece
// automatico o tipo de variavel declarada, aprendi também que o javascript tem operadores arentiméticos que são: * - multiplicar, / - divisão,
// - - subtração, + - adição, ** exponenciador, % - módulo ou resto de uma operação, ++ - atribuição que adiciona + 1, -- - o de decremento decrementa - 1

// let patientId = 50;
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientInfo);
// console.log(patientInfo);
// console.log(patientEmail);
// console.log(patientInfo['firstName'] + " " + patientInfo['lastName']);

// if - se
// else - senão

let trafficLight = "Vermelho";

switch (trafficLight) {
  case "Vermelho":
    console.log("Pare");
    break;
  case "Amarelo":
    console.log("Atenção");
    break;
  case "Verde":
    console.log("Siga");
    break;
  default:
    console.log("Valor não identificado");
}
