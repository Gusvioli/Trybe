// 1 - Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten() {
    // escreva seu código aqui
    return arrays[0].concat(arrays[1]).concat(arrays[2]);
  }

  flatten();

  module.exports = { flatten, arrays }; 