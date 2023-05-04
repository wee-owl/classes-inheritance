import Character from './app';

class Bowman extends Character {
  constructor(name, attack, protection) {
    super(name, attack, protection);
    this.name = 'Bowman';
    this.attack = 25;
    this.protection = 25;
  }
}
