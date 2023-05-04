import Character from './app';

class Magician extends Character {
  constructor(name, attack, protection) {
    super(name, attack, protection);
    this.name = 'Magician';
    this.attack = 10;
    this.protection = 40;
  }
}
