const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames(array) {
    // escreva seu código aqui
    array.map((item) => {
        const separarItem = item.split(' - ');
        // return arrayDeLivros;
        console.log(separarItem);

    });
}

formatedBookNames(expectedResult);