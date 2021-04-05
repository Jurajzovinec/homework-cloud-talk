const FieldYieldSolution = require('../classes/fieldYieldSolution');
const Field = require('../classes/field');
const exampleValues = require('../data/exampleValues');

test('Test with example input and output.', () => {

    const testFieldInIntegral = new Field(7);

    expect(FieldYieldSolution.solveYield(exampleValues.exampleResults[0].queriedField, testFieldInIntegral.generateIntegralImage()))
        .toBe(exampleValues.exampleResults[0].resultOfYield);
    expect(FieldYieldSolution.solveYield(exampleValues.exampleResults[1].queriedField, testFieldInIntegral.generateIntegralImage()))
        .toBe(exampleValues.exampleResults[1].resultOfYield);
    expect(FieldYieldSolution.solveYield(exampleValues.exampleResults[2].queriedField, testFieldInIntegral.generateIntegralImage()))
        .toBe(exampleValues.exampleResults[2].resultOfYield);
    expect(FieldYieldSolution.solveYield(exampleValues.exampleResults[3].queriedField, testFieldInIntegral.generateIntegralImage()))
        .toBe(exampleValues.exampleResults[3].resultOfYield);

});

