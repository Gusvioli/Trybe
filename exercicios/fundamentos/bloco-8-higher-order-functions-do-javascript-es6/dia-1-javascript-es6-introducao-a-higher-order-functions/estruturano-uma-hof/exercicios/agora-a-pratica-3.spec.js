const { resultado , checa } = require('./agora-a-pratica-3');

describe('Testando as funções resultado() e checa()', ()=> {

  test('Verifica se a função resultado é realmente um função', ()=> {
    expect(typeof resultado).toEqual('function');
  });

  test('Verifica se a função checa é realmente um função', ()=> {
    expect(typeof checa).toEqual('function');
  });

  test('Verifica se a função resultado retorna "O resultado é 4."', ()=> {
    expect(resultado(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], checa)).toEqual(`O resultado é 4.`);
  });
});

