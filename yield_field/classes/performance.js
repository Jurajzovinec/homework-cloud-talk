const Field = require('./field');
const MultipleQueries = require('./multipleQueries');
const FieldYieldSolution = require('./fieldYieldSolution');

class Performance {

  constructor(fieldLength, amountOfQueries) {
    this.fieldLength = fieldLength;
    this.amountOfQueries = amountOfQueries;

    this.generatedIntegralImage = undefined;
    this.generatedQueries = undefined;
    this.generatedYieldsFromQueries = undefined;

    this.generatingIntegralImageTime = undefined;
    this.generatingQueriesTime = undefined;
    this.generetingYieldsFromQueriesTime = undefined;
  }

  generateIntegralImage() {
    const startTime = new Date();

    this.generatedIntegralImage = new Field(this.fieldLength).generateIntegralImage();
    this.generatingIntegralImageTime = new Date() - startTime;
  }

  generateQueries() {
    const startTime = new Date();

    this.generatedQueries = MultipleQueries.generateQueries(this.amountOfQueries, this.fieldLength * this.fieldLength);
    this.generatingQueriesTime = new Date() - startTime;
  }

  generateYieldsFromQueries() {
    const startTime = new Date();

    this.generatedYieldsFromQueries = [];
    this.generatedQueries.forEach(generatedQuery => {
      this.generatedYieldsFromQueries.push(FieldYieldSolution.solveYield(generatedQuery, this.generatedIntegralImage));
    });
    this.generetingYieldsFromQueriesTime = new Date() - startTime;
  }

  generateInformationObject() {
    return [
      {
        task: "Generating integral Image",
        quantityOfInputs: this.fieldLength + ' [N]',
        elapsedTime: this.generatingIntegralImageTime + ' ms',

      },
      {
        task: "Generating list of queries",
        quantityOfInputs: this.amountOfQueries + ' [Q]',
        elapsedTime: this.generatingQueriesTime + ' ms',
      },
      {
        task: "Generating results from queries",
        quantityOfInputs: this.amountOfQueries + ' [Q]',
        elapsedTime: this.generetingYieldsFromQueriesTime + ' ms',
      }
    ]; 
  }

}

module.exports = Performance;
