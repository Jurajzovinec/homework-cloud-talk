const lengthOfSquaredField = 7;

const numberOfQueriesOnInput = 3;

const yieldsOfPartsOfTheField = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 1,
    2, 3, 4, 5, 6, 7, 8,
    9, 1, 2, 3, 4, 5, 6,
    7, 8, 9, 1, 2, 3, 4
];

const fieldArea = yieldsOfPartsOfTheField.length;

const exampleResults = [
    {
        "queriedField": [1, 1, 7, 7],
        "resultOfYield": 235
    },
    {
        "queriedField": [3, 3, 3, 3],
        "resultOfYield": 8
    },
    {
        "queriedField": [4, 2, 6, 2],
        "resultOfYield": 9
    }    
];

module.exports = {
    lengthOfSquaredField,
    numberOfQueriesOnInput,
    yieldsOfPartsOfTheField,
    fieldArea,
    exampleResults
};
