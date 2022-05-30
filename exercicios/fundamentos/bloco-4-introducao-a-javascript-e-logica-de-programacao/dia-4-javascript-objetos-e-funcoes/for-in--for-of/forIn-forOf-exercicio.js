console.log(
  "------------------------For/in percorre a variavel objeto pelo seu indice-----------------------------"
);

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge"
};

for (let index in names) {
  console.log("Olá " + names[index]);
}

console.log(
  "------------------------For/in percorre a variável objeto pelo seu indice-----------------------------"
);

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020
};

for (let valor in car) {
  console.log(car[valor]);
}

console.log(
  "------------------------For/of percorre a variável array porem não pecorre a variável objeto-----------------------------"
);

let car2 = ["model: A3 Sedan","anufacturer: Audi", "year: " + 2020]


for (let iterator of car2) {
  console.log(iterator);
}
