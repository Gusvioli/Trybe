const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (maiorNome) => maiorNome.length === 5;

console.log(names.find(findNameWithFiveLetters));