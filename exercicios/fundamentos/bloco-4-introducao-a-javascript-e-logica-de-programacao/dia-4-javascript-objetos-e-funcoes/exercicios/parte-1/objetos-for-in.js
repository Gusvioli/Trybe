console.log("------------------1------------------");

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Bem vinda, " + info.personagem);

console.log("------------------2-------------------");

  info['recorrente'] = 'Sim';

console.log(info.recorrente);


console.log("------------------3-------------------");

for (let key in info) {
    console.log(key);
}

console.log("------------------4-------------------");


for (let key in info) {
    console.log(info[key]);
}

console.log("------------------5-------------------");

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
  };

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
console.log("Ambos recorrentes // Atenção para essa última linha!");


console.log("------------------6-------------------");

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama '" + leitor.livrosFavoritos[0].titulo + "'");

console.log("------------------7-------------------");

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }

 console.log(leitor.livrosFavoritos[1]); 

console.log("------------------8-------------------");

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos");