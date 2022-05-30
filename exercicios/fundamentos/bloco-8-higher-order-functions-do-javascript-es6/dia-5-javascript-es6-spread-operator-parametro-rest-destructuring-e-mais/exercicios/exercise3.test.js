const { personLikes, gunnar, alex } = require('./exercise3');

describe('Exercise 3', () => {
  test('Verificar se a função personLikes é uma função', ()=> {
   expect(typeof personLikes).toBe('function');
  });
  test("Verificar se a entrada da função personLikes retorna 'Alex is 26 years old and likes fly fishing.'", ()=> {
   expect(personLikes(alex)).toBe('Alex is 26 years old and likes fly fishing.');
  });
  test("Verificar se a entrada da função personLikes retorna 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'", ()=> {
   expect(personLikes(gunnar)).toBe('Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');
  });
});
