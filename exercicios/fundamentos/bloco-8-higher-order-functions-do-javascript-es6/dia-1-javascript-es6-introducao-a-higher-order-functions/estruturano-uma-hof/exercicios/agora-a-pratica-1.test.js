const { newEmployees, novaPssoaContratada } = require('./agora-a-pratica-1');

describe('Testar a função newEmployees', () => {
  it('Primeiro teste: é uma função!?', () => {
    expect(typeof newEmployees).toBe('function');
  })
  it('Segundo teste: é uma função!?', () => {
    expect(typeof novaPssoaContratada).toBe('function');
  })
  it('Terceiro teste: Verifica se Adicionar o nome Pedro Guerra e o numero 1 retorna um objeto {"email": "pedro_guerra@trybe.com", "id": 1, "nome": "Pedro Guerra"}', () => {
    expect(novaPssoaContratada('Pedro Guerra', 1)).toEqual({ id: 1, nome: 'Pedro Guerra', email: 'pedro_guerra@trybe.com' });
  })
  it('Quarto teste: Verifica se Adicionar o nome Luiza Drumond e o numero 2 retorna um objeto {"email": "luiza_drumond@trybe.com", "id": 2, "nome": "Luiza Drumond"}', () => {
    expect(novaPssoaContratada('Luiza Drumond', 2)).toEqual({ id: 2, nome: 'Luiza Drumond', email: 'luiza_drumond@trybe.com' });
  })
  it('Quinto teste: Verifica se Adicionar o nome Carla Paiva e o numero 3 retorna um objeto {"email": "carla_paiva@trybe.com", "id": 3, "nome": "Carla Paiva"}', () => {
    expect(novaPssoaContratada('Carla Paiva', 3)).toEqual({ id: 3, nome: 'Carla Paiva', email: 'carla_paiva@trybe.com' });
  })
});