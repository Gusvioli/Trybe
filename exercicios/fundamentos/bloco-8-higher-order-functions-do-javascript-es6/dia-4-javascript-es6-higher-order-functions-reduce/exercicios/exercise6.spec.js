const { studentAverage, students, grades, expected } = require('./exercise6');

describe('Teste da função containsA Exercício 5', ()=>{ 
    test('Teste 1: verificar se é uma função', ()=>{
      expect(typeof studentAverage).toBe('function');
    })
    test('Teste 2: verificar se entrada students é uma variável do tipo object', ()=>{
      expect(typeof students).toBe('object');
    })
    test('Teste 3: verificar se entrada grades é uma variável do tipo object', ()=>{
      expect(typeof grades).toBe('object');
    })
    test('Teste 4: verificar se entrada expected é uma variável do tipo object', ()=>{
      expect(typeof expected).toBe('object');
    })
    test('teste 5: verifica se a saida é igual a {expected}', ()=>{
      expect(studentAverage(students, grades)).toEqual(expected);
    }); 
  });