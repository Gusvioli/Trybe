const { containsA, names } = require('./exercise5');

describe('Teste da função containsA Exercício 5', ()=>{ 
    test('Teste 1: verificar se é uma função', ()=>{
      expect(typeof containsA).toBe('function');
    })
    test('Teste 2: verificar se entrada é uma variável do tipo object', ()=>{
      expect(typeof names).toBe('object');
    })
    test('teste 3: verifica se a saida é igual a 20', ()=>{
      expect(containsA(names)).toEqual(20);
    }); 
  });
