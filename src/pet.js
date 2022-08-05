const MAX_AGE = 30;
const MIN_HUNGER = 0;
const MAX_HUNGER = 10;
const MIN_FITNESS = 0;
const MAX_FITNESS = 10;
const DEAD_PET = 'Your pet is no longer alive :('

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = MIN_HUNGER;
    this.fitness = MAX_FITNESS;
    this.children = [];
};

Pet.prototype = {
    get isAlive() {
        return (
            this.age < MAX_AGE && 
            this.hunger < MAX_HUNGER && 
            this.fitness > MIN_FITNESS
    )}
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
    this.hunger = newHunger < MIN_HUNGER ? MIN_HUNGER : newHunger;
}

Pet.prototype.walk = function() {
    if(!this.isAlive) throw new Error(DEAD_PET);
    const newFitness = this.fitness + 4;
    this.fitness = newFitness > MAX_FITNESS ? MAX_FITNESS : newFitness;
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