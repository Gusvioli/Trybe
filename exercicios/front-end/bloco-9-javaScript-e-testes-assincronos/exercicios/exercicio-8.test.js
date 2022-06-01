// 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório
// do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle.
// Complete a chamada da função getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você escolheu.
// PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados,
// então não se esqueça de tratá-los também, combinado?

const { getPokemonDetails } = require("./exercicio-8");

describe("Testando getPokemonDetails", () => {
  test("Teste de Calback para tratar erros", () => {
    getPokemonDetails("Squirtle", (error, msg) => {
      try {
        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
        expect((filter) => filter.name === 'Squirtle', (error, msg) => {
            if (error) {
              console.log(error);
            } else {
              console.log(msg);
            }
          }).toBe(messageFromProfOak);
        done();
      } catch (error) {
        done(callback(error, null));
      }
    });
  });
});
