const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors(array) {
    // escreva seu código aqui
    const ordenar = array.sort( (item)=> item[0]);
    console.log(ordenar);
  }

  fantasyOrScienceFictionAuthors(expectedResult);