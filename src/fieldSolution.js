
function startRangeAtFieldIndex(startX, startY, fieldArea) {
    return (startX - 1) + (startY - 1) * Math.sqrt(fieldArea);
}

function stopRangeAtFieldIndex(stopX, stopY, fieldArea) {
    return (stopX - 1) + (stopY - 1) * Math.sqrt(fieldArea);
}

function sumOfRange(queriedPartOfTheField, yieldsOfPartsOfTheField) {
    
    const [startX, startY, endX, endY] = queriedPartOfTheField;
    const startPosition = startRangeAtFieldIndex(startX, startY, yieldsOfPartsOfTheField.length);
    const stopPosition = stopRangeAtFieldIndex(endX, endY, yieldsOfPartsOfTheField.length);
    const sumedUpRangeOfField = yieldsOfPartsOfTheField.slice(startPosition, stopPosition + 1);

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return sumedUpRangeOfField.reduce(reducer);
}

module.exports = {
    sumOfRange,
    stopRangeAtFieldIndex,
    startRangeAtFieldIndex
};



