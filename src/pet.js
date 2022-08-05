const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const DEAD_PET = 'Your pet is no longer alive :('

function petFactory(name) {
    let _age = 0;
    let _hunger = MINIMUM_HUNGER;
    let _fitness = MAXIMUM_FITNESS;
    const _children = [];

    return {
        get name() { return name},
        get age() {return _age},
        set age(val) {_age = val},
        get hunger() {return _hunger},
        set hunger(val) {_hunger = val},
        get fitness() {return _fitness},
        set fitness(val) {_fitness = val},
        get children() {return _children},
        get isAlive() {
            return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        },
        growUp: function() {
            if(!this.isAlive) throw new Error(DEAD_PET);
            this.age += 1;
            this.hunger += 5;
            this.fitness -= 3;
        },
        feed: function() {
            if(!this.isAlive) throw new Error(DEAD_PET);
            const newHunger = this.hunger - 3;
            this.hunger = newHunger < MINIMUM_HUNGER ? MINIMUM_HUNGER : newHunger;
        },
        walk: function() {
            if(!this.isAlive) throw new Error(DEAD_PET);
            const newFitness = this.fitness + 4;
            this.fitness = newFitness > MAXIMUM_FITNESS ? MAXIMUM_FITNESS : newFitness;
        },
        checkUp: function() {
            const checkHunger = this.hunger >= 5;
            const checkFitness = this.fitness <= 3;
        
            if (!this.isAlive) return DEAD_PET;
            if (checkHunger && checkFitness) return 'I am hungry AND I need a walk';
            if (checkHunger) return 'I am hungry';
            if (checkFitness) return 'I need a walk';
            return 'I feel great!';
        },
        haveBaby: function(babyName) {
            this.children.push(petFactory(babyName));
        },
        adoptChild: function(pet) {
            this.children.push(pet);
        }
    };
};

module.exports = petFactory;