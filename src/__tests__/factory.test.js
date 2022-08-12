const petFactory = require('../factory')

describe('constructor', () => {
    it('returns and object', () => {
        expect(petFactory('Fido')).toBeInstanceOf(Object);
    });

    it('sets name property', () => {
        const pet = petFactory('Fido');
        expect(pet.name).toBe('Fido');
    });

    it('cannot change pet name', () => {
        const pet = petFactory('Fido');
        pet.name = 'Pete'
        expect(pet.name).not.toBe('Pete');
        expect(pet.name).toBe('Fido');
    });  
    
    it('creates seperate instances of objects', () => {
        const fido = petFactory('Fido');
        const pete = petFactory('Pete');
        expect(fido.name).toBe('Fido');
        expect(pete.name).toBe('Pete');
    });

    describe('age', () => {
        it('sets initial value to 0', () => {
            const pet = petFactory('Fido');
            expect(pet.age).toBe(0);
        });

        it('increases by 1 when growUp is called', () => {
            const pet = petFactory('Fido');
            expect(pet.age).toBe(0);
            pet.growUp();
            expect(pet.age).toBe(1);
        });
    });

    describe('hunger', () => {
        it('sets initial value to 0', () => {
            const pet = petFactory('Fido');
            expect(pet.hunger).toBe(0);
        });

        it('increases by 5 when growUp is called', () => {
            const pet = petFactory('Fido');
            pet.growUp();
            expect(pet.hunger).toBe(5);
        });

        it('decreases by 3 when feed is called', () => {
            const pet = petFactory('Fido');
            pet.hunger = 5;
            pet.feed();
            expect(pet.hunger).toBe(2);
        });

        it('never goes below 0', () => {
            const pet = petFactory('Fido');
            pet.feed();
            expect(pet.hunger).toBe(0);
        });  
    });

    describe('fitness', () => {
        it('sets initial value to 10', () => {
            const pet = petFactory('Fido');
            expect(pet.fitness).toBe(10);
        });

        it('decreases 3 when growUp is called', () => {
            const pet = petFactory('Fido');
            pet.growUp();
            expect(pet.fitness).toBe(7);
        });

        it('increases by 4 when walk is called', () => {
            const pet = petFactory('Fido');
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toBe(8);
        });

        it('does not increase fitness past 10', () => {
            const pet = petFactory('Fido');
            pet.walk();
            expect(pet.fitness).toBe(10);
        });
    });

    describe('checkUp', () => {
        it('returns "I feel great!" when fitness > 3 and hunger < 5', () => {
            const pet = petFactory('Fido');
            expect(pet.checkUp()).toEqual('I feel great!')
        });

        it('returns "I am hungry" when fitness > 3 and hunger >= 5', () => {
            const pet = petFactory('Fido');
            pet.hunger = 5;
            expect(pet.hunger).toBeGreaterThanOrEqual(5);
            expect(pet.fitness).toBeGreaterThan(3);
            expect(pet.checkUp()).toEqual('I am hungry');
        });

        it('returns "I need a walk" when fitness <= 3 and hunger < 5', () => {
            const pet = petFactory('Fido');
            pet.fitness = 3;
            expect(pet.hunger).toBeLessThan(5);
            expect(pet.fitness).toBeLessThanOrEqual(3);
            expect(pet.checkUp()).toEqual('I need a walk');
        });

        it('returns "I am hungry AND I need a walk" when fitness <= 3 and hunger >= 5', () => {
            const pet = petFactory('Fido');
            pet.fitness = 3;
            pet.hunger = 5;
            expect(pet.hunger).toBeGreaterThanOrEqual(5);
            expect(pet.fitness).toBeLessThanOrEqual(3);            
            expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
        });
    });

    describe('baby', () => {
        it('initializes children as an array', () => {
            const pet = petFactory('Fido');
            expect(pet.children).toBeInstanceOf(Array);
        });

        it('initializes with 0 children', () => {
            const pet = petFactory('Fido');
            expect(pet.children).toHaveLength(0)
        });

        it('creates a child when haveBaby is called', () => {
            const pet = petFactory('Fido');
            pet.haveBaby('Pete');
            expect(pet.children).toHaveLength(1);
            expect(pet.children[0]).toBeInstanceOf(Object);
            expect(pet.children[0].name).toBe('Pete')
        });

        it('can adopt a child using adoptChild with the child', () => {
            const pet = petFactory('Fido');
            const pet2 = petFactory('Pete');
            pet.adoptChild(pet2);
            expect(pet.children).toHaveLength(1);
            expect(pet.children[0]).toBeInstanceOf(Object);
            expect(pet.children[0].name).toBe('Pete')
        });
    });

    describe('isAlive', () => {
        it('is false when age >= 30 and checkUp returns "Your pet is no longer alive :("', () => {
            const pet = petFactory('Fido');
            pet.age = 30;
            expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
        });

        it('is false when hunger >= 10', () => {
            const pet = petFactory('Fido');
            pet.hunger = 10;
            expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
        });

        it('is false when fitness <= 0', () => {
            const pet = petFactory('Fido');
            pet.fitness = 0;
            expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
        });

        it('when false, cannot call growUp', () => {
            const pet = petFactory('Fido');
            pet.age = 30;
            expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        });

        it('when false, cannot call feed', () => {
            const pet = petFactory('Fido');
            pet.age = 30;
            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });        
        
        it('when false, cannot call walk', () => {
            const pet = petFactory('Fido');
            pet.age = 30;
            expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
        });
    });
})