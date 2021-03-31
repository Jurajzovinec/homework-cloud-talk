function generateStrawberryField(fieldLength) {
    const generatedStrawberyField = Array(fieldLength * fieldLength).fill().map((_, i) => Math.ceil(Math.random() * 9));
    console.log(generatedStrawberyField);
    return generatedStrawberyField;
}

function generateSingleQuery(fieldArea) {
    
    /* constraints:
        1.) a, b, c, d will be less than or equal to N - constraint secured by declaration of constraintMultiplier
        2.) a will be less than or equal to c
        3.) b will be less than or equal to d

    */

    const constraintMultiplier = Math.sqrt(fieldArea);   
    console.log(constraintMultiplier);

    const startPosition = Array(2).fill().map((_, i) => Math.ceil(Math.random() * constraintMultiplier)); 
    const endPosition = Array(2).fill().map((_, i) => Math.floor(Math.random() * (constraintMultiplier - startPosition[i])) + startPosition[i]);

    console.log(startPosition);
    console.log(endPosition);

    return startPosition.concat(endPosition);
}

// generateSingleQuery(49);

module.exports = {
    generateStrawberryField,
    generateSingleQuery,
};
