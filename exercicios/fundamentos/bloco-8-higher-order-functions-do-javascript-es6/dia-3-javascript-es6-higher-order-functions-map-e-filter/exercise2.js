const expectedResult = [{
        age: 31,
        author: 'Isaac Asimov',
    },
    {
        age: 38,
        author: 'H. P. Lovecraft',
    },
    {
        age: 39,
        author: 'Stephen King',
    },
    {
        age: 43,
        author: 'George R. R. Martin',
    },
    {
        age: 45,
        author: 'Frank Herbert',
    },
    {
        age: 62,
        author: 'J. R. R. Tolkien',
    },
];

function nameAndAge(array) {
    // escreva seu código aqui
    const arrayAarrauExe1 = array.map((item) => {
        const returno = {
            age: item.age,
            author: item.author,
        };
        console.log(returno);
    });
}

nameAndAge(expectedResult);

