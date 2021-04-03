const Field = require('../classes/field');
const exampleValues = require('../data/exampleValues');

test('Returns field array with valid amount of elements', () => {
    const testedFieldInputs = [3, 9, 11, 27, 47, 150, 9854];
    testedFieldInputs.forEach((testedInputValue) => {
        expect(new Field(testedInputValue).fieldArea).toBe(testedInputValue * testedInputValue);
    });
});

test('Throw error due to wrong input numerical value', () => {
    const invalidFieldInputs = [2, 10001, 55555, 98741];
    invalidFieldInputs.forEach((invalidFieldInput) => {
        expect(() => new Field(invalidFieldInput)).toThrow('Invalid field length value. Choose value from range of 3 to 10 000.');
    });
});

test('Don not throw error due to correct input numerical value', () => {
    const validFieldInputs = [3, 10000];
    validFieldInputs.forEach((validFieldInput) => {
        expect(() => new Field(validFieldInput)).not.toThrow('Invalid field length value. Choose value from range of 3 to 10 000.');
    });

});

test('Check content of field values', () => {
    const validElementValues = Array.from({ length: 9 }, (_, i) => i + 1);
    validElementValues.forEach((validElementValue) => {
        expect(new Field(1000).generateFlatField()).toContain(validElementValue);
    });

    const invalidElementValues = [null, undefined, 0];
    invalidElementValues.forEach((invalidElementValue) => {
        expect(new Field(1000).generateFlatField()).not.toContain(invalidElementValue);
    });
});

test('Check length of integralImage', () => {
    const testedFieldInputs = [3, 8, 9, 9871];
    testedFieldInputs.forEach((testedInputValue) => {
        expect(new Field(testedInputValue).generateIntegralImage().length).toBe(testedInputValue);
    });

});

test('Compare generated field with example field', () => {

    function compareFields(field1, field2) {
        return JSON.stringify(field1) === JSON.stringify(field2);
    }

    const exampleArray = exampleValues.yieldsOfPartsOfTheField;
    const generatedArray = new Field(exampleValues.yieldsOfPartsOfTheField.length).generate2Dfield();
    expect(compareFields(exampleArray, generatedArray)).toBe(true);

});