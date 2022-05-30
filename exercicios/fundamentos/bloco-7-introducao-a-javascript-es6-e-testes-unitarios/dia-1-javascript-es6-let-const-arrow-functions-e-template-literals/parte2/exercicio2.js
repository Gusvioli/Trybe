// Exercicio 2
const maiorPalavra = (frase) => {
    const splitar = frase.split(' ');
    const mapear = Math.max(...splitar.map(splitar => splitar.length));
    for (let index = 0; index < splitar.length; index += 1) {
        if (splitar[index].length === mapear) {
            console.log(splitar[index]);
        }
    }
}
maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu');