const Performance = require('./classes/performance');

const strawberryFieldLength = 10000; // N, lenght of field => Area = N*N
const amountOfQueries = 10000; // Q

const app = new Performance(strawberryFieldLength, amountOfQueries);
app.generateField();
app.generateQueries();
app.generateYieldsFromQueries();

// console.log(app.generatedIntegralImage);
// console.log(app.generatedQueries);
// console.log(app.generatedYieldsFromQueries);
console.table(app.generateInformationObject());
