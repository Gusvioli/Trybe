let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Loop for que ordena de forma crescente um array
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log("---------------------------");
console.log(numbers);

// Loop for que ordena de forma decrescente um array
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}

console.log("---------------------------");
console.log(numbers);
console.log("---------------------------");

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];
for (let index = 0; index < numbers.length - 1; index += 1) {
  novoArray.push(numbers[index] * numbers[index + 1]);
}
if (numbers.length % 2 == 0) {
  novoArray.push(numbers[numbers.length - 1] * 2);
}

console.log(novoArray);
