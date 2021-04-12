const Performance = require('./classes/performance');
const MemoryUsage = require('./classes/memoryUsage');

const strawberryFieldLength = 5000; // N, lenght of field => Area = N*N
const amountOfQueries = 10; // Q

const app = new Performance(strawberryFieldLength, amountOfQueries);

app.generateIntegralImage();
app.generateQueries();
app.generateYieldsFromQueries();

// console.log(app.generatedIntegralImage);
// console.log(app.generatedQueries);
// console.log(app.generatedYieldsFromQueries);
console.table(app.generateInformationObject());
console.table(MemoryUsage.buildMemoryUsageTable());
