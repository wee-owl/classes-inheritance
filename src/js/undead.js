import Character from './app';

class Undead extends Character {
  constructor(name, attack, protection) {
    super(name, attack, protection);
    this.name = 'Undead';
    this.attack = 25;
    this.protection = 25;
  }
}
