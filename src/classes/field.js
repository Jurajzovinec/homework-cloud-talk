class Field {

    constructor(desiredLengthOfField) {
        this.desiredAreaOfFieldLowerLimit = 3;
        this.desiredAreaOfFieldUpperLimit = 10000;
        this.desiredLengthOfField = this.validateConstraint(desiredLengthOfField);
        this.desiredAreaOfField = this.desiredLengthOfField * this.desiredLengthOfField;
        this.decimalField = Array.from({ length: 9 }, (_, i) => i + 1);
        this.field = this.growField();
        this.fieldArea = this.field.length;
    }

    validateConstraint(inputDesiredField) {
        if (inputDesiredField < this.desiredAreaOfFieldLowerLimit || inputDesiredField > this.desiredAreaOfFieldUpperLimit) {
            throw new Error('Invalid field length value. Choose value from range of 3 to 10 000.');
        }
        return inputDesiredField;
    }

    growField() {

        // approach for huge fields
        if (this.desiredLengthOfField >= this.decimalField.length) {
            const maxDecimalFieldInPeriodicRow = Math.floor(this.desiredLengthOfField / this.decimalField.length);
            const maxPeriodicRow = [].concat(... new Array(maxDecimalFieldInPeriodicRow).fill(this.decimalField));
            const maxOfPeriodicRow = (Math.floor(this.desiredAreaOfField / maxPeriodicRow.length));
            this.field = new Array(maxOfPeriodicRow).fill(maxPeriodicRow);
        }

        // approach for small fields
        if (this.desiredLengthOfField < this.decimalField.length) {
            const maxDecimalFieldsInField = Math.floor(this.desiredAreaOfField / this.decimalField.length);
            this.field = new Array(maxDecimalFieldsInField).fill(this.decimalField);
        }

        // Flatten the current array
        this.field = [].concat.apply([], this.field);

        if (Math.floor((this.desiredAreaOfField - this.field.length) / this.decimalField.length) > 0) {
            const addDecFieldTimes = Math.floor((this.desiredAreaOfField - this.field.length) / this.decimalField.length);
            let flattenedArrayToAdd = new Array(addDecFieldTimes).fill(this.decimalField);
            flattenedArrayToAdd = [].concat.apply([], flattenedArrayToAdd);
            this.field = this.field.concat(flattenedArrayToAdd);
        }
        
        this.field = this.field.concat(this.decimalField.splice(0, this.desiredAreaOfField - this.field.length));

        return this.field;
    }

}

module.exports = Field;