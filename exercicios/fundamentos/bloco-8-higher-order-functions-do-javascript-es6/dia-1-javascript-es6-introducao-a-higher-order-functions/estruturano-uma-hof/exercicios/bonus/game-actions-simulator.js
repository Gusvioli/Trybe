const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const danoDragao = (strength) => {
   const numero = Math.floor(Math.random() * (strength - 15 + 1) + 15);
   return numero;
};

const danoWarrior = (strength, weaponDmg) => {
    const numero = Math.floor(Math.random() * (strength - 15 + 1) + 15);
    const danoW = numero + strength * weaponDmg;
    return danoW;
};

const obj = (intelligence) => {
    const dano = Math.floor(Math.random() * ((intelligence * 2)  - intelligence + 1) + intelligence);
  const mago = {
    dano: dano,
    mana: intelligence * 2,
  }
  return mago;
};

console.log(obj(danoWarrior(warrior.strength, warrior.weaponDmg)));

const battleMembers = {
    mage,
    warrior,
    dragon
};