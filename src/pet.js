const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.feed = function() {
    const newHunger = this.hunger - 3;
    this.hunger = newHunger < MINIMUM_HUNGER ? MINIMUM_HUNGER : newHunger;
}

Pet.prototype.walk = function() {
    const newFitness = this.fitness + 4;
    this.fitness = newFitness > MAXIMUM_FITNESS ? MAXIMUM_FITNESS : newFitness;
};

Pet.prototype.checkUp = function() {
    const checkHunger = this.hunger >= 5;
    const checkFitness = this.fitness <= 3;

    if (checkHunger && checkFitness) return 'I am hungry AND I need a walk'
    if (checkHunger) return 'I am hungry';
    if (checkFitness) return 'I need a walk';
    return 'I feel great!'
}

module.exports = Pet