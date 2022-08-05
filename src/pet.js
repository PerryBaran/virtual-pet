const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const DEAD_PET = 'Your pet is no longer alive :('

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
};

Pet.prototype.growUp = function() {
    if(!this.isAlive) throw new Error(DEAD_PET);
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.feed = function() {
    if(!this.isAlive) throw new Error(DEAD_PET);
    const newHunger = this.hunger - 3;
    this.hunger = newHunger < MINIMUM_HUNGER ? MINIMUM_HUNGER : newHunger;
}

Pet.prototype.walk = function() {
    if(!this.isAlive) throw new Error(DEAD_PET);
    const newFitness = this.fitness + 4;
    this.fitness = newFitness > MAXIMUM_FITNESS ? MAXIMUM_FITNESS : newFitness;
};

Pet.prototype.checkUp = function() {
    const checkHunger = this.hunger >= 5;
    const checkFitness = this.fitness <= 3;

    if (!this.isAlive) return DEAD_PET;
    if (checkHunger && checkFitness) return 'I am hungry AND I need a walk';
    if (checkHunger) return 'I am hungry';
    if (checkFitness) return 'I need a walk';
    return 'I feel great!';
};

Pet.prototype.haveBaby = function(name) {
    this.children.push(new Pet(name));
};

Pet.prototype.adoptChild = function(pet) {
    this.children.push(pet);
};

module.exports = Pet;