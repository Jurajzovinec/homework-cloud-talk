const divideArrayIntoChunks = (array, lengthOfChunk) => {
    
    let outputArray = [];

    while (array.length > 0) {
        chunk = array.splice(0, lengthOfChunk);
        outputArray.push(chunk);
    }

    return outputArray;
};

module.exports = divideArrayIntoChunks;