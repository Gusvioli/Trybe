//Média aritmética

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let guardar = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  guardar += numbers[index];
}

let valor = guardar / numbers.length;

if (valor > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
