const SingleQuery = require('../classes/singleQuery');
const Field = require('../classes/field');

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

test('Check if constraints are met for a, b, c, d.', () => {
    const generatedFields = [new Field(1000).fieldArea, new Field(50).fieldArea, new Field(7000).fieldArea];
    generatedFields.forEach(generatedFieldArea=>{
        const generatedQuery = SingleQuery.generateQuery(generatedFieldArea);
        expect(generatedQuery[0]).toBeLessThanOrEqual(generatedQuery[2]);
        expect(generatedQuery[1]).toBeLessThanOrEqual(generatedQuery[3]);
    });
});


test('Check if single query returns valid amount of integers.', () => {
    const generatedFields = [new Field(randomInteger(3,10000)).fieldArea, new Field(randomInteger(3,10000)).fieldArea];
    generatedFields.forEach(generatedFieldArea=>{
        const generatedQuery = SingleQuery.generateQuery(generatedFieldArea);
        expect(generatedQuery.length).toBe(4);
    });
});
