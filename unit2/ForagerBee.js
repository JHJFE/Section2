const Bee = require('./Bee');

class ForagerBee extends Bee {
  // TODO..
  constructor() {
    super(); // Grub를 상속 받은 Bee의 생성자 호출

    this.age = 10;
    this.job = 'find pollen';
    // eat(), food은 상속한 시점에서 생성됨
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(thing) {
   this.treasureChest.push(thing);
  }

}

module.exports = ForagerBee;
