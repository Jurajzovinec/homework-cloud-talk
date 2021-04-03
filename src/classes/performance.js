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

    this.generatingFieldTime = undefined;
    this.generatingQueriesTime = undefined;
    this.generetingYieldsFromQueriesTime = undefined;

  }
  generateField() {

    const startTime = new Date();
    this.generatedIntegralImage = new Field(this.fieldLength).generateIntegralImage();
    const elapsedTime = new Date() - startTime;
    this.generatingFieldTime = elapsedTime;

  }

  generateQueries() {

    const startTime = new Date();
    this.generatedQueries = MultipleQueries.generateQueries(this.amountOfQueries, this.fieldLength * this.fieldLength);
    const elapsedTime = new Date() - startTime;
    this.generatingQueriesTime = elapsedTime;

  }

  generateYieldsFromQueries() {

    this.generatedYieldsFromQueries = [];
    const startTime = new Date();
    this.generatedQueries.forEach(generatedQuery => {
      this.generatedYieldsFromQueries.push(FieldYieldSolution.solveYield(generatedQuery, this.generatedIntegralImage));
    });
    const elapsedTime = new Date() - startTime;
    this.generetingYieldsFromQueriesTime = elapsedTime;
  }

  generateInformationObject() {
    return [
      {
        task: "Generating integral Image",
        quantityOfInputs: this.fieldLength + ' [N]',
        elapsedTime: this.generatingFieldTime + ' ms',
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
