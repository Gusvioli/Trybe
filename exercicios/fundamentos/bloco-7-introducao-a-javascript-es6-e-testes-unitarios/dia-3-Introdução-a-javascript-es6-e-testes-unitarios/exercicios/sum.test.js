const sum = require('./sum');

describe('Requisito da função SUM()', () => {
  // test('', () => );
  test('Espera que o resultado de 4 + 5 seja 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  // test('', () => );
  test('Espera que o resultado de 0 + 0 seja 0', () => {
      expect(sum(0,0)).toBe(0);
  });

  // test('', () => );
  test('Espera que os parâmetros sejam numeros', () => {
      expect(() => sum()).toThrow('Parametros não são numeros');
  });

  // test('', () => );
  test('parameters must be numbers', () => {
      expect(() => sum()).toThrow('Parametros não são numeros');
  });
});
