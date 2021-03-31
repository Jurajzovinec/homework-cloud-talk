const generateRandomInputValues = require('./generateRandomInputValues');

test('Returns valid start index.', () => {

    expect(generateRandomInputValues.generateStrawberryField(9)).toBeDefined();
    expect(generateRandomInputValues.generateStrawberryField(10000)).toBeDefined();
    expect(() => generateRandomInputValues.generateStrawberryField(10001)).toThrow('Invalid field length value. Choose value from range of 3 to 10 000.');
    expect(() => generateRandomInputValues.generateStrawberryField(2)).toThrow('Invalid field length value. Choose value from range of 3 to 10 000.');

});

test('Returns valid start index.', () => {

    const generatedStrawberryField = generateRandomInputValues.generateStrawberryField(7);
    const resultOfQuery = generateRandomInputValues.generateSingleQuery(generatedStrawberryField.length);

    expect(resultOfQuery[0]).toBeLessThanOrEqual(resultOfQuery[2]);
    expect(resultOfQuery[1]).toBeLessThanOrEqual(resultOfQuery[3]);
});
