const { filterPeople, nomes } = require("./exercise4");

describe("Exercise 4", () => {
  test("Verifica se filterPeople é realmente uma função", () => {
    expect(typeof filterPeople).toBe("function");
  });
  test(`Verifica se o resultado da entrada nomes é [ 'Nicole', 'Harry', 'Toby' ]`, () => {
    expect(nomes).toEqual(["Nicole", "Harry", "Toby"]);
  });
});
