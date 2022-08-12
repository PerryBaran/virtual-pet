const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const deadPetError = 'Your pet is no longer alive :('

function petFactory(name) {
    let _age = 0;
    let _hunger = MINIMUM_HUNGER;
    let _fitness = MAXIMUM_FITNESS;
    const _children = [];
    
    const isAlive = () => _age < 30 && _hunger < 10 && _fitness > 0;
    
    const growUp = () => {
        if(!isAlive()) throw new Error(deadPetError);
        _age += 1;
        _hunger += 5;
        _fitness -= 3;
    };
    
    const feed = () => {
        if(!isAlive()) throw new Error(deadPetError);
        const newHunger = _hunger - 3;
        _hunger = newHunger < MINIMUM_HUNGER ? MINIMUM_HUNGER : newHunger;
    };
    
    const walk = () => {
        if(!isAlive()) throw new Error(deadPetError);
        const newFitness = _fitness + 4;
        _fitness = newFitness > MAXIMUM_FITNESS ? MAXIMUM_FITNESS : newFitness;
    };
    
    const checkUp = () => {
        const checkHunger = _hunger >= 5;
        const checkFitness = _fitness <= 3;
    
        if (!isAlive()) return deadPetError;
        if (checkHunger && checkFitness) return 'I am hungry AND I need a walk';
        if (checkHunger) return 'I am hungry';
        if (checkFitness) return 'I need a walk';
        return 'I feel great!';
    };
    
    const haveBaby = (babyName) => {
        _children.push(petFactory(babyName));
    };
    
    const adoptChild = (pet) => {
        _children.push(pet);
    };

    return {
        get name() {return name},
        get age() {return _age},
        set age(val) {_age = val},
        get hunger() {return _hunger},
        set hunger(val) {_hunger = val},
        get fitness() {return _fitness},
        set fitness(val) {_fitness = val},
        get children() {return _children},
        growUp,
        feed,
        walk,
        checkUp,
        haveBaby,
        adoptChild
    };
};

module.exports = petFactory;