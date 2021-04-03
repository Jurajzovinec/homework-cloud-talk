class Field {

    constructor(desiredLengthOfField) {
        this.desiredAreaOfFieldLowerLimit = 3;
        this.desiredAreaOfFieldUpperLimit = 10000;
        this.desiredLengthOfField = this.validateConstraint(desiredLengthOfField);
        this.desiredAreaOfField = this.desiredLengthOfField * this.desiredLengthOfField;
        this.decimalField = Array.from({ length: 9 }, (_, i) => i + 1);
        this.field = this.generate2Dfield();
        this.fieldArea = this.sumfieldArea();
    }

    validateConstraint(inputDesiredField) {
        if (inputDesiredField < this.desiredAreaOfFieldLowerLimit || inputDesiredField > this.desiredAreaOfFieldUpperLimit) {
            throw new Error('Invalid field length value. Choose value from range of 3 to 10 000.');
        }
        return inputDesiredField;
    }

    sumfieldArea() {
        this.flatField = this.generateFlatField();
        return this.flatField.length;
    }

    generateFlatField(){
        return [].concat.apply([], this.field);
    }   

    generate2Dfield() {
        let startRowWithNumber = 1;
        const longerRow = new Array((Math.floor(this.desiredLengthOfField / this.decimalField.length) + 2)).fill(this.decimalField).flat();
        const matrix = new Array(this.desiredLengthOfField).fill().map(() => {
            const startIndex = longerRow.findIndex((index) => index == startRowWithNumber);
            const row = longerRow.slice(startIndex, startIndex + this.desiredLengthOfField);
            startRowWithNumber = row.slice(-1)[0] + 1;
            if (startRowWithNumber > 9) startRowWithNumber = 1;
            return row;
        });
        return matrix;
    }

    generateIntegralImage() {
        let integralImage = Array.from(Array(this.desiredLengthOfField), () => new Array(this.desiredLengthOfField));
        let value;
        for (let y = 0; y < this.desiredLengthOfField; ++y) {
            for (let x = 0; x < this.desiredLengthOfField; ++x) {
                value = this.field[x][y];
                if (y > 0) value += integralImage[x][y - 1];
                if (x > 0) value += integralImage[x - 1][y];
                if (x > 0 && y > 0) value -= integralImage[x - 1][y - 1];
                integralImage[x][y] = value;
            }
        }
        return integralImage;
    }
}

module.exports = Field;