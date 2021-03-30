
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

const fieldLength = yieldsOfPartsOfTheField.length;

const queriedFields = [
    1, 1, 7, 7,
    3, 3, 3, 3,
    4, 2, 6, 2
];

function startRangeAtFieldIndex(startX, startY) {
    return (startX - 1) + (startY - 1) * Math.sqrt(fieldLength);
}

function stopRangeAtFieldIndex(stopX, stopY) {
    return (stopX - 1) + (stopY - 1) * Math.sqrt(fieldLength);
}

function sumOfRange(startX, startY, endX, endY) {

    const startPosition = startRangeAtFieldIndex(startX, startY);
    const stopPosition = stopRangeAtFieldIndex(endX, endY);
    const sumedUpRangeOfField = yieldsOfPartsOfTheField.slice(startPosition, stopPosition + 1);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return sumedUpRangeOfField.reduce(reducer);
}

module.exports = {
    sumOfRange,
    stopRangeAtFieldIndex,
    startRangeAtFieldIndex
};



