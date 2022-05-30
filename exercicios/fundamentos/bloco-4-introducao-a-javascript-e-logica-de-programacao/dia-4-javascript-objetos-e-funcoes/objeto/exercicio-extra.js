// Exercicio extra da aula de Objeto em javaScript

let gustavo = {
  nome: "Gustavo",
  sobreNome: "Vieira",
  idade: 39,
  altura: 1.78,
  corCabelo: "castanho escuro",
  tipoSaguinio: "O+",
  localNascimento: "Rio de Janeiro",
  musicasFavoritas: ["Alok", "RRTP", "Link park", "Rocking Roll"],
  endereco: {
    rua: "rua Quitembu",
    numero: 21,
    complemento: "casa 7",
  },
};

gustavo["sobreNome"] = "Vieira de Oliveira";

console.log(
  "O usuário " +
    gustavo.nome +
    " " +
    gustavo.sobreNome +
    " tem a idade de " +
    gustavo.idade +
    " anos, possue uma altura de " +
    gustavo.altura +
    ", o seu cabelo é " +
    gustavo.corCabelo +
    ", tipo sanguineo é " +
    gustavo.tipoSaguinio +
    " nasceu no " +
    gustavo["localNascimento"] +
    " atualmente mora no endereço " +
    gustavo.endereco.rua +
    " numero " +
    gustavo.endereco.numero +
    " complemento " +
    gustavo.endereco.complemento +
    " bandas musicais favoritas: " +
    gustavo.musicasFavoritas
);

console.table(gustavo);
