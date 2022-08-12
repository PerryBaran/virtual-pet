const { MAX_AGE, MIN_HUNGER, MAX_HUNGER, MIN_FITNESS, MAX_FITNESS, DEAD_PET } = require('./magicNumbers');

function petFactory(name) {
    let _age = 0;
    let _hunger = MIN_HUNGER;
    let _fitness = MAX_FITNESS;
    const _children = [];
    
    const isAlive = () => {
        return (
            _age < MAX_AGE && 
            _hunger < MAX_HUNGER && 
            _fitness > MIN_FITNESS            
    )};
    
    const growUp = () => {
        if(!isAlive()) throw new Error(DEAD_PET);
        _age += 1;
        _hunger += 5;
        _fitness -= 3;
    };
    
    const feed = () => {
        if(!isAlive()) throw new Error(DEAD_PET);
        const newHunger = _hunger - 3;
        _hunger = newHunger < MIN_HUNGER ? MIN_HUNGER : newHunger;
    };
    
    const walk = () => {
        if(!isAlive()) throw new Error(DEAD_PET);
        const newFitness = _fitness + 4;
        _fitness = newFitness > MAX_FITNESS ? MAX_FITNESS : newFitness;
    };
    
    const checkUp = () => {
        const checkHunger = _hunger >= 5;
        const checkFitness = _fitness <= 3;
        const HUNGRY = 'I am hungry';
        const UNFIT = 'I need a walk';

        if (!isAlive()) return DEAD_PET;
        if (checkHunger && checkFitness) return `${HUNGRY} AND ${UNFIT}`;
        if (checkHunger) return HUNGRY;
        if (checkFitness) return UNFIT;
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