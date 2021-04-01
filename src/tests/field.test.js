const Field = require('../classes/field');

test('Returns field array with valid amount of elements', () => {
    
    const testedFieldInputs = [3, 9, 11, 27, 47, 150, 1000, 5000, 10000];
    
    testedFieldInputs.forEach((testedInputValue) => {
        expect(new Field(testedInputValue).fieldArea).toBe(testedInputValue * testedInputValue);
    });
});

test('Throw error due to wrong input numerical value', () => {
    
    const testedFieldInputs = [2, 10001, 55555, 98741];
    
    testedFieldInputs.forEach((testedInputValue) => {
        expect(()=>new Field(testedInputValue)).toThrow('Invalid field length value. Choose value from range of 3 to 10 000.');
    });
});

test('Check content of field values', () => {
    
    const validElementValues = Array.from({ length: 9 }, (_, i) => i + 1);
    
    validElementValues.forEach((validElementValue) => {
        expect(new Field(1000).field).toContain(validElementValue);
    });

    const invalidElementValues = [null, undefined, 0];
    
    invalidElementValues.forEach((invalidElementValue) => {
        expect(new Field(1000).field).not.toContain(invalidElementValue);
    });
});