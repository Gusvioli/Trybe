function sum(a, b) { 
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Parametros não são numeros');
      } 
    return a + b;
}

  module.exports = sum;