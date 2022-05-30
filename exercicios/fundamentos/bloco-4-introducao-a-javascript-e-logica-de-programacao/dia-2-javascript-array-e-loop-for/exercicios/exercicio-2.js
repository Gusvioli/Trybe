//Soma dos valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let guardar = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  guardar += numbers[index];
}
console.log("A soma dos numeros dentro do array é: " + guardar);

