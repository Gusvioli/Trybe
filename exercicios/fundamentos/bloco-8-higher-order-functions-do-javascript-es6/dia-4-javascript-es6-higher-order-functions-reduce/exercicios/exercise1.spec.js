const { flatten, arrays } = require('./exercise1');

describe('Teste da função fletten Exercício 1', ()=>{ 
  test('Teste 1: verificar se é uma função', ()=>{
    expect(typeof flatten).toBe('function');
  })
  test('Teste 2: verificar se entrada é uma variável do tipo object', ()=>{
    expect(typeof arrays).toBe('object');
  })
  test(`Teste 3: verificar se entrada é [['1', '2', '3'],[true],[4, 5, 6],]`, ()=>{
    expect(arrays).toEqual([['1', '2', '3'],[true],[4, 5, 6],]);
  })
  test('Teste 4: verificar se a saida retorna ["1", "2", "3", true, 4, 5, 6]', ()=>{
    expect(flatten()).toEqual(["1", "2", "3", true, 4, 5, 6]);
  })
});