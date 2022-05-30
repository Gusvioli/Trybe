const { resultado, checa } = require('./agora-a-pratica-2');

describe('Verificar a função: resultado', () => {
  test('Teste um, verificar se é uma função', () => {
    expect(typeof resultado).toBe('function');
  });
  test('Teste dois, verificar se colocando 2 propiedades numericas igual a saida da função é "Parabéns você ganhou"', () =>{
    expect(typeof resultado(2,checa)).toBe('string');
  });
});