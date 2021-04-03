const yieldsOfPartsOfTheField = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 1, 2, 3, 4]
];

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
    },
    {
        "queriedField": [4, 4, 5, 5],
        "resultOfYield": 26
    }  
];

module.exports = {
    yieldsOfPartsOfTheField,
    exampleResults
};
