const MultipleQueries = require('../classes/multipleQueries');

test('Check if every query is list of integers', () => {
    const multipleQueries = MultipleQueries.generateQueries(10000, 51 * 51);
    multipleQueries.forEach((singleQuery) => {
        expect(!singleQuery.some(isNaN)).toBe(true);
    });
});

test('Check if amount of queries equals to asked input', () => {
    const askedInputs = [5, 10, 25, 19391, 43753, 7878, 101027, 999999, 100000];
    askedInputs.forEach((askedInput)=>{
        const multipleQueries = MultipleQueries.generateQueries(askedInput, 6 * 6);
        expect(multipleQueries.length).toBe(askedInput);
    });    
});

test('Check if MultipleQueries throws error on invalid input.', () => {
    expect(() => MultipleQueries.generateQueries(0, 6 * 6)).toThrow(/Invalid amount of queries length value./);
    expect(() => MultipleQueries.generateQueries(1000001, 6 * 6)).toThrow(/Invalid amount of queries length value./);
});

test('Check if MultipleQueries does not throw error on valid input', () => {
    expect(() => MultipleQueries.generateQueries(1, 6 * 6)).not.toThrow(/Invalid amount of queries length value./);
    expect(() => MultipleQueries.generateQueries(1000000, 6 * 6)).not.toThrow(/Invalid amount of queries length value./);
});

// plus create error handling of maximum queries