const { toObject, palio, shelbyCobra, chiron } = require('./exercise6');

describe('Exercicio 6', () => { 
  test('Verifica se toObject é realmente uma função.', () => {
    expect(typeof toObject).toBe('function');
  });
  test(`Verifica se o retorno da função é { palio: [ 'Palio', 'Fiat', 2019 ],shelbyCobra: [ 'Shelby Cobra', 'Ford', 1963 ], chiron: [ 'Chiron', 'Bugatti', 2016 ] }`, () => {
    expect(toObject([palio, shelbyCobra, chiron])).toEqual({"chiron": ["Chiron", "Bugatti", 2016], "palio": ["Palio", "Fiat", 2019], "shelbyCobra": ["Shelby Cobra", "Ford", 1963]});
  });
});