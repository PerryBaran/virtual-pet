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
    })
})