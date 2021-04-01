const SingleQuery = require('../classes/singleQuery');
const Field = require('../classes/field');

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

test('Check if constraints are met for a, b, c, d.', () => {

    const generatedFields = [new Field(1000).field, new Field(50).field, new Field(7000).field];

    generatedFields.forEach(generatedField=>{
        const generatedQuery = new SingleQuery(generatedField.length).query;
        expect(generatedQuery[0]).toBeLessThanOrEqual(generatedQuery[2]);
        expect(generatedQuery[1]).toBeLessThanOrEqual(generatedQuery[3]);
    });
});

test('Check if single query returns valid amount of integers.', () => {

    const generatedFields = [new Field(randomInteger(3,10000)), new Field(randomInteger(3,10000))];

    generatedFields.forEach(generatedField=>{
        const generatedQuery = new SingleQuery(generatedField.length).query;
        expect(generatedQuery.length).toBe(4);
    });
});