const fieldSolution = require('./fieldSolution');
const exampleValues = require('./exampleValues');


test('Returns valid start index.', () => {
    expect(fieldSolution.startRangeAtFieldIndex(1, 1, exampleValues.fieldArea)).toBe(0);
    expect(fieldSolution.startRangeAtFieldIndex(1, 2, exampleValues.fieldArea)).toBe(7);
    expect(fieldSolution.startRangeAtFieldIndex(1, 3, exampleValues.fieldArea)).toBe(14);
    expect(fieldSolution.startRangeAtFieldIndex(2, 3, exampleValues.fieldArea)).toBe(15);
});

test('Returns valid stop index.', () => {
    expect(fieldSolution.stopRangeAtFieldIndex(4, 1, exampleValues.fieldArea)).toBe(3);
    expect(fieldSolution.stopRangeAtFieldIndex(5, 3, exampleValues.fieldArea)).toBe(18);
    expect(fieldSolution.stopRangeAtFieldIndex(2, 2, exampleValues.fieldArea)).toBe(8);
    expect(fieldSolution.stopRangeAtFieldIndex(7, 7, exampleValues.fieldArea)).toBe(48);
});

test('Returns correct sumUp of field yield.', () => {
    expect(fieldSolution.sumOfRange(exampleValues.exampleResults[0].queriedField, exampleValues.yieldsOfPartsOfTheField)).toBe(exampleValues.exampleResults[0].resultOfYield);
    expect(fieldSolution.sumOfRange(exampleValues.exampleResults[1].queriedField, exampleValues.yieldsOfPartsOfTheField)).toBe(exampleValues.exampleResults[1].resultOfYield);
    expect(fieldSolution.sumOfRange(exampleValues.exampleResults[2].queriedField, exampleValues.yieldsOfPartsOfTheField)).toBe(exampleValues.exampleResults[2].resultOfYield);
    expect(fieldSolution.sumOfRange([2, 7, 5, 7], exampleValues.yieldsOfPartsOfTheField)).toBe(20);
});



