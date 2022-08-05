const Pet = require('../pet');

describe('constructor', () => {
    it('returns and object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toBe('Fido');
    });

    it('sets initial age property to 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);
    });

    it('increases age by 1 when growUp is called', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);
        pet.growUp();
        expect(pet.age).toBe(1);
    });

    it('sets initial hunger propety to 0', () => {
        const pet = new Pet('Fido');
        expect(pet.hunger).toBe(0);
    });

    it('increases hunger by 5 when growUp is called', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toBe(5);
    });

    it('decreases hunger level by 3 when feed is called', () => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.feed();
        expect(pet.hunger).toBe(1);
    });

    it('hunger level never goes below 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toBe(0);
    });

    it('sets initial fitness propety to 10', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toBe(10);
    });

    it('decreases fitness by 3 when growUp is called', () => {
        const pet = new Pet('Fido');
        expect(pet.fitness).toBe(10);
        pet.growUp();
        expect(pet.fitness).toBe(7);
    });

    it('increases fitness by 4 when walk is called', () => {
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
})