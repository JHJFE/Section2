const Grub = require('./Grub');

class Bee extends Grub{
  // TODO..
  constructor(){
    super(); // 부모생성자 호출

    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing'
  }
}

module.exports = Bee;
