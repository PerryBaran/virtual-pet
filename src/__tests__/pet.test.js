const Pet = require('../pet');

describe('constructor', () => {
    it('returns and object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toBe('Fido');
    });

    describe('isAlive', () => {
        it('returns true if fitness > 0, hunger < 10 and age < 30', () => {
            const pet = new Pet('Fido');
            expect(pet.isAlive).toBeTruthy();
        });

        it('returns false if fitness <= 0', () => {
            const pet = new Pet('Fido');
            pet.fitness = 0;
            expect(pet.isAlive).toBeFalsy();
        });

        it('returns false if hunger >= 10', () => {
            const pet = new Pet('Fido');
            pet.hunger = 10;
            expect(pet.isAlive).toBeFalsy();
        });

        it('returns false if age >= 30', () => {
            const pet = new Pet('Fido');
            pet.age = 30;
            expect(pet.isAlive).toBeFalsy();
        });
    });

    describe('age', () => {
        it('sets initial value to 0', () => {
            const pet = new Pet('Fido');
            expect(pet.age).toBe(0);
        });

        it('increases by 1 when growUp is called', () => {
            const pet = new Pet('Fido');
            expect(pet.age).toBe(0);
            pet.growUp();
            expect(pet.age).toBe(1);
        });

        it('cannot call growUp when isAlive is false', () => {
            const pet = new Pet('Fido');
            pet.age = 30;
            expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
        });
    });

    describe('hunger', () => {
        it('sets initial value to 0', () => {
            const pet = new Pet('Fido');
            expect(pet.hunger).toBe(0);
        });

        it('increases by 5 when growUp is called', () => {
            const pet = new Pet('Fido');
            pet.growUp();
            expect(pet.hunger).toBe(5);
        });

        it('decreases by 3 when feed is called', () => {
            const pet = new Pet('Fido');
            pet.hunger = 4;
            pet.feed();
            expect(pet.hunger).toBe(1);
        });

        it('never goes below 0', () => {
            const pet = new Pet('Fido');
            pet.hunger = 2;
            pet.feed();
            expect(pet.hunger).toBe(0);
        });  
        
        it('cannot call feed when isAlive is false', () => {
            const pet = new Pet('Fido');
            pet.hunger = 10;
            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
        });
    });

    describe('fitness', () => {
        it('sets initial value to 10', () => {
            const pet = new Pet('Fido');
            expect(pet.fitness).toBe(10);
        });

        it('decreases 3 when growUp is called', () => {
            const pet = new Pet('Fido');
            expect(pet.fitness).toBe(10);
            pet.growUp();
            expect(pet.fitness).toBe(7);
        });

        it('increases by 4 when walk is called', () => {
            const pet = new Pet('Fido');
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toBe(8);
        });

        it('does not increase fitness past 10', () => {
            const pet = new Pet('Fido');
            pet.fitness = 7;
            pet.walk();
            expect(pet.fitness).toBe(10);
        });

        it('cannot call walk when isAlive is false', () => {
            const pet = new Pet('Fido');
            pet.fitness = 0;
            expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
        });
    });

    describe('checkUp', () => {
        it('returns "I feel great!" when fitness > 3 and hunger < 5', () => {
            const pet = new Pet('Fido');
            expect(pet.checkUp()).toEqual('I feel great!')
        });

        it('returns "I am hungry" when fitness > 3 and hunger >= 5', () => {
            const pet = new Pet('Fido');
            pet.hunger = 5;
            expect(pet.checkUp()).toEqual('I am hungry');
            pet.hunger = 7;
            expect(pet.checkUp()).toEqual('I am hungry');
        });

        it('returns "I need a walk" when fitness <= 3 and hunger < 5', () => {
            const pet = new Pet('Fido');
            pet.fitness = 3;
            expect(pet.checkUp()).toEqual('I need a walk');
            pet.fitness = 1;
            expect(pet.checkUp()).toEqual('I need a walk');
        });

        it('returns "I am hungry AND I need a walk" when fitness <= 3 and hunger >= 5', () => {
            const pet = new Pet('Fido');
            pet.hunger = 5;
            pet.fitness = 3;
            expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
            pet.hunger = 7;
            pet.fitness = 1;
            expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
        });

        it('returns "Your pet is no longer alive :(" when isAlive is false', () => {
            const pet = new Pet('Fido');
            pet.age = 30;
            expect(pet.checkUp()).toEqual('Your pet is no longer alive :(');
        });        
    });

    describe('baby', () => {
        it('initializes children as an array', () => {
            const pet = new Pet('Fido');
            expect(pet.children).toBeInstanceOf(Array);
        });

        it('initializes with 0 children', () => {
            const pet = new Pet('Fido');
            expect(pet.children).toHaveLength(0)
        });

        it('creates a child when haveBaby is called', () => {
            const pet = new Pet('Fido');
            pet.haveBaby('Pete');
            expect(pet.children).toHaveLength(1);
            expect(pet.children[0]).toBeInstanceOf(Object);
            expect(pet.children[0].name).toBe('Pete')
        });

        it('can adopt a child using adoptChild with the child', () => {
            const pet = new Pet('Fido');
            const pet2 = new Pet('Pete');
            pet.adoptChild(pet2);
            expect(pet.children).toHaveLength(1);
            expect(pet.children[0]).toBeInstanceOf(Object);
            expect(pet.children[0].name).toBe('Pete')
        });
    });
})