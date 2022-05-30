// Exercicio 1

const retornarFatorial = (n) => { 
    let val = 1;
    for (i = n; i >= 1; i -= 1) {val *= i;}
    return val;
}

console.log(retornarFatorial(10));