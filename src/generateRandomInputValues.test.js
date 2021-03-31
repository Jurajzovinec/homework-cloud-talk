const generateRandomInputValues = require('./generateRandomInputValues');

test('Returns valid start index.', () => {
    expect(generateRandomInputValues.generateStrawberryField(9)).toBeDefined();
});


test('Returns valid start index.', () => {
    
    const generatedStrawberryField = generateRandomInputValues.generateStrawberryField(7);
    const resultOfQuery = generateRandomInputValues.generateSingleQuery(generatedStrawberryField.length);

    expect(resultOfQuery[0]).toBeLessThanOrEqual(resultOfQuery[2]);
    expect(resultOfQuery[1]).toBeLessThanOrEqual(resultOfQuery[3]);
});
