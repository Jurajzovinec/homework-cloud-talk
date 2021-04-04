class FieldYieldSolution {

    static solveYield(queriedPartOfTheField, integralImageField) {
        // implementation of Summed-area table algorithm
        // more about this algorithm on ... https://en.wikipedia.org/wiki/Summed-area_table      
        const rectPosX = queriedPartOfTheField[0]-1;
        const rectPosY = queriedPartOfTheField[1]-1;
        const endX = queriedPartOfTheField[2]-1;
        const endY = queriedPartOfTheField[3]-1;
        const rectWidth = endX - rectPosX + 1;
        const rectHeight = endY - rectPosY + 1;
        
        let A = 0;
        let B = 0;
        let C = 0;
        let D = 0;
        
        if (rectPosX > 0 && rectPosY > 0)
            A = integralImageField[rectPosX - 1][rectPosY - 1];
        if (rectPosY > 0)
            B = integralImageField[rectPosX + rectWidth - 1][rectPosY - 1];
        if (rectPosX > 0)
            C = integralImageField[rectPosX - 1][rectPosY + rectHeight - 1];
        D = integralImageField[rectPosX + rectWidth - 1][rectPosY + rectHeight - 1];
        return A - B - C + D;
    }
}

module.exports = FieldYieldSolution;



