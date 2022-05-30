const newEmployees = (novaPssoaContratada) => novaPssoaContratada; // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas

const novaPssoaContratada = (nome, id) => {
    const formatoEmail = nome.replace(' ', '_').toLowerCase();
    const email = `${formatoEmail}@trybe.com`;
    return {
        id,
        nome,
        email
    };
};
novaPssoaContratada('Pedro Guerra', 1);
novaPssoaContratada('Luiza Drumond', 2);
novaPssoaContratada('Carla Paiva', 3);

module.exports = { newEmployees, novaPssoaContratada };