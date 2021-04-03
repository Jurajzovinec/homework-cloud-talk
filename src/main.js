const Performance = require('./classes/performance');

const strawberryFieldLenght = 10000; // N, lenght of field => Area = N*N
const amountOfQueries = 1000; // Q

const app = new Performance(strawberryFieldLenght,amountOfQueries);
app.generateField();
app.generateQueries();
app.generateYieldsFromQueries();

//console.log(app.generatedIntegralImage);
//console.log(app.generatedQueries);
//console.log(app.generatedYieldsFromQueries);
console.table(app.generateInformationObject());

