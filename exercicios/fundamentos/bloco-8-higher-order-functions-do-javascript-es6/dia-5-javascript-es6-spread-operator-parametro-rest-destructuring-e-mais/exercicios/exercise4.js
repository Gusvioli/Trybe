const people = [
  {
    name: "Nicole",
    bornIn: 1992,
    nationality: "Australian",
  },
  {
    name: "Harry",
    bornIn: 2008,
    nationality: "Australian",
  },
  {
    name: "Toby",
    bornIn: 1901,
    nationality: "Australian",
  },
  {
    name: "Frida",
    bornIn: 1960,
    nationality: "Dannish",
  },
  {
    name: "Fernando",
    bornIn: 2001,
    nationality: "Brazilian",
  },
];

// escreva filterPeople abaixo

const filterPeople = ({ name }) => `Essas são todas as pessoas Australianas: ${name.join(', ')}`;
const nomes = people.filter((item) => item.nationality === "Australian").map((item) => (item.name));
filterPeople({name: nomes});

module.exports = { filterPeople, nomes };