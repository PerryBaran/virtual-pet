const MAXIMUM_FITNESS = 10;

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = MAXIMUM_FITNESS;
}

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function() {
    const newFitness = this.fitness + 4;
    this.fitness = newFitness > MAXIMUM_FITNESS ? MAXIMUM_FITNESS : newFitness;
}

module.exports = Pet