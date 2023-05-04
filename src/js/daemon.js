import Character from './app';

class Daemon extends Character {
  constructor(name, attack, protection) {
    super(name, attack, protection);
    this.name = 'Daemon';
    this.attack = 10;
    this.protection = 40;
  }
}
