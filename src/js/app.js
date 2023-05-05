export default class Character {
  constructor(name, type) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];

    if (typeof (name) !== 'string' || !(name.length >= 2 && name.length <= 10)) {
      throw new Error('Invalid value (string length must be between 2 and 10)');
    } else {
      this.name = name;
    }

    if (typeof (type) !== 'string' || !typeArr.includes(type)) {
      throw new Error('Invalid character name value');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
