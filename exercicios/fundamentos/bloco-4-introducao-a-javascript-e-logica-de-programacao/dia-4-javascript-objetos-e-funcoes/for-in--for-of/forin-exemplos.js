let cars = ["Saab", "Volvo", "BMW"];

for (let index in cars) {
  console.log(cars[index]);
}

console.log(
  "------------------------For/in percorre a variavel array ou a variavel objeto pelo seu indice-----------------------------"
);

let food = ["hamburguer", "bife", "acarajé"];

for (let position in food) {
  console.log(position);
}
//resultado: 0, 1, 2;

console.log(
  "------------------------For/of percorre a variavel array ou a variavel objeto pelo seu valor-----------------------------"
);

let food2 = ["hamburguer", "bife", "acarajé"];
for (let value of food2) {
  console.log(value);
}
//resultado: hamburguer, bife, acarajé;
