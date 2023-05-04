import Character from './app';

class Swordsman extends Character {
  constructor(name, attack, protection) {
    super(name, attack, protection);
    this.name = 'Swordsman';
    this.attack = 40;
    this.protection = 10;
  }
}
