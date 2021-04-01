class FieldSolution {
    
    constructor(queriedPartOfTheField, yieldsOfPartsOfTheField) {
        this.yieldsOfPartsOfTheField = yieldsOfPartsOfTheField;
        [this.startX, this.startY, this.endX, this.endY] = queriedPartOfTheField;
        this.fieldArea = this.yieldsOfPartsOfTheField.length;
        this.startPosition = this.calcStartRangeAtFieldIndex();
        this.stopPosition = this.calcEndRangeAtFieldIndex();
        this.solution = this.sumUpRange();
    }

    sumUpRange() {     
        const sumedUpRangeOfField = this.yieldsOfPartsOfTheField.slice(this.startPosition, this.stopPosition + 1);     
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return sumedUpRangeOfField.reduce(reducer);
    }

    calcStartRangeAtFieldIndex() {
        return ((this.startX - 1) + (this.startY - 1) * Math.sqrt(this.fieldArea));
    }

    calcEndRangeAtFieldIndex() {
        return ((this.endX - 1) + (this.endY - 1) * Math.sqrt(this.fieldArea));
    }
}

module.exports = FieldSolution;



