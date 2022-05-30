const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (divisor) => divisor % 3 === 0 && divisor % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5))