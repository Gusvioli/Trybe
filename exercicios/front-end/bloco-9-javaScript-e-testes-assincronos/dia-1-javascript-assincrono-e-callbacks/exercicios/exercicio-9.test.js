// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a
// escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js
// e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../exercicios/exercicio-8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", () => {
    const error = ('Não temos esse pokémon para você :(');
    expect(getPokemonDetails((filter) => filter.name === "Squirtles", (error, msg) => error) ).toEqual(error);
    // done();
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    expect(getPokemonDetails((filter) => filter.name === "Squirtle", (error, msg) => msg) ).toBe('Squirtle');
    done();
  });
});
