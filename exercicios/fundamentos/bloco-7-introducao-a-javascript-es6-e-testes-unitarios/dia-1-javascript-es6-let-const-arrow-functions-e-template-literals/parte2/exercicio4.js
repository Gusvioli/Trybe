const arr = ['Html', 'Css', 'JavaScript', 'DOM', 'Unix'];

const funcaoUm = (texto) => "Tryber x aqui!".replace('x', texto);

const funcaoDois = (recebe) => {
    const ordem = arr.sort();
    console.log(`
    ${recebe}

    Minhas cinco principais habilidades são:

    ✓ ${ordem[0]}
    ✓ ${ordem[1]}
    ✓ ${ordem[2]}
    ✓ ${ordem[3]}
    ✓ ${ordem[4]}

    #goTrybe
    `);
}

funcaoDois(funcaoUm('x'));