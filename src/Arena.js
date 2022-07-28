class Arena {
  constructor(size, monsters, hero) {
    this.hero = hero;
    this.monsters = monsters;
    this.size = size;
  }

  getDistance(fighter1, fighter2) {
    return Math.sqrt(Math.pow(fighter2.x - fighter1.x, 2) + Math.pow(fighter2.y - fighter1.y, 2)).toFixed(2)
  };

  isTouchable(attacker, defender) {
    return this.getDistance(attacker, defender) <= attacker.getRange()
  }
 
}