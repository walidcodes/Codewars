class Dog {
  constructor(name, species, size) {
    this.name = name;
    this.species = species;
    this.size = size;
  }
  bark() {
    if (this.size > 60) return "Grr! Grr!";
    else return "Woof! Woof";
  }
}
//

class Character {
  constructor(name, health, strength) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.xp = 0; // XP is always zero for new characters
    this.inventory = { gold: 10, key: 1 };
  }
  // Attack a target
  attack(target) {
    if (this.health > 0) {
      const damage = this.strength;
      console.log(
        `${this.name} attacks ${target.name} and causes ${damage} damage points`
      );
      target.health -= damage;
      if (target.health > 0) {
        console.log(`${target.name} has ${target.health} health points left`);
      } else {
        target.health = 0;
        const bonusXP = 10;
        console.log(
          `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points`
        );
        this.xp += bonusXP;
        this.inventory = {
          gold: this.inventory.gold + target.inventory.gold,
          key: this.inventory.key + target.inventory.key,
        };
      }
    } else {
      console.log(`${this.name} can’t attack (they've been eliminated)`);
    }
  }
  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength, ${this.xp} XP points, ${this.inventory.gold} gold and ${this.inventory.key} key(s)`;
  }
}
//

class initiateAccount {
  constructor(name) {
    this.name = name;
    this.balance = 0;
  }
  credit(value) {
    this.balance += value;
  }
  describe() {
    console.log(`owner: ${this.name}, balance: ${this.balance}`);
  }
}

const seanAccount = new initiateAccount("Sean");
const bradAccount = new initiateAccount("Brad");
const georgesAccount = new initiateAccount("Georges");

seanAccount.credit(1000);
bradAccount.credit(1000);
georgesAccount.credit(1000);
