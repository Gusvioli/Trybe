//Média aritmética

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let guardar = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  guardar += numbers[index];
}
console.log("A média aritmética do array é: " + guardar / numbers.length);
