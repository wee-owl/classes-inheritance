export default class Character {
  constructor(name, type, attack, protection) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.protection = protection;

    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
    const typeInArr = typeArr.some((el) => el === type);

    if (typeof (name) !== 'string' || !(name.length >= 2 && name.length <= 10)) {
      throw new Error('Invalid value (string length must be between 2 and 10)');
    }

    if (typeof (type) !== 'string' || typeInArr === false) {
      throw new Error('Invalid character name value');
    }
  }
}
