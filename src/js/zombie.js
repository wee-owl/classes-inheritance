import Character from './app';

class Zombie extends Character {
  constructor(name, attack, protection) {
    super(name, attack, protection);
    this.name = 'Zombie';
    this.attack = 40;
    this.protection = 10;
  }
}
