const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const adicionarTurnoNoite = (objeto, chave, valor) => objeto[`${chave}`] = `${valor}`;
adicionarTurnoNoite(lesson2, 'turno', 'noite');

const listarKeys = (obj1) => Object.keys(obj1);

const tamObjeto = (obj2) => Object.keys(obj2).length;

const valoresObjeto = (obj3) => Object.values(obj3);

const allLessons = {lesson1: {}, lesson2: {}, lesson3: {}};

Object.assign(allLessons.lesson1, lesson1);
Object.assign(allLessons.lesson2, lesson2);
Object.assign(allLessons.lesson3, lesson3);

const numeroTotalEstudantes = (allLessons) => {
    const conra =  Object.values(allLessons);
    return conra.numeroEstudantes;
}

console.log(numeroTotalEstudantes(allLessons));