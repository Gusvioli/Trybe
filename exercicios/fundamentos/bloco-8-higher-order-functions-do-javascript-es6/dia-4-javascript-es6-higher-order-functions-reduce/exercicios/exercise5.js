// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(array) {
  // escreva seu código aqui
  return array.reduce((acc, curr) => `${acc}${curr}`)
  .toLowerCase().split('')
  .filter((item) => item === 'a')
  .length;
}

containsA(names);

module.exports = { containsA, names };
  
  