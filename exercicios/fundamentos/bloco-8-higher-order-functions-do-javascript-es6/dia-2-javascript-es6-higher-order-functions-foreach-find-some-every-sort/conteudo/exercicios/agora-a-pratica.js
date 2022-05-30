const books = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// EXERCICIO 1
// Adicione o código do exercício aqui:
function authorBornIn1947() {
    // escreva aqui o seu código
    return books.find((ano) => ano.author.birthYear === 1947);
}

//   console.log(authorBornIn1947());

// EXERCICIO 2
// function smallerName() {
//     let nameBook;
//     // escreva aqui o seu código
//     const menor = (name) => {
//         if (name.name.length === 4) {
//             console.log(name);
//         }
//     };
//     nameBook = books.forEach((menor));
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
// }

// smallerName();


// EXERCICIO 3
// const expectedResult = {
//     author: {
//         birthYear: 1948,
//         name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
// };

// function getNamedBook() {
//     // escreva seu código aqui
//     const menor = (name) => {
//         if (name.name.length === 26) {
//             console.log(name);
//         }
//     };

//     return books.forEach((menor));
// }

// getNamedBook();

// EXERCICIO 4

const expectedResult = [{
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948
        },
        releaseYear: 1991,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947
        },
        releaseYear: 1986,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920
        },
        releaseYear: 1965,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920
        },
        releaseYear: 1951,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890
        },
        releaseYear: 1928,
    },
];

// function booksOrderedByReleaseYearDesc() {
//     // escreva aqui seu código
//     expectedResult.sort(function (a, b) {
//         return a.releaseYear + b.releaseYear;
//     });
//     console.log(expectedResult);
// }
// booksOrderedByReleaseYearDesc();

// EXERCICIO 5
// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//     // escreva seu código aqui
//     expectedResult.every((xx) => {
//       console.log(xx.author.birthYear < 1900 && xx.author.birthYear > 2000);
//     });
// }

// everyoneWasBornOnSecXX();

// EXERCICIO 6

// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//     // escreva seu código aqui
//     expectedResult.some((xx) => {
//         console.log(xx.releaseYear > 1979 && xx.releaseYear < 1990);
//     });
// }
// someBookWasReleaseOnThe80s();

// EXERCICIO 7

