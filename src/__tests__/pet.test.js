const Pet = require('../pet');

describe('constructor', () => {
    it('returns and object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object)
    });

    it('sets name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toBe('Fido')
    });
})