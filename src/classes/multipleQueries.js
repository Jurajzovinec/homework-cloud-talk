const SingleQuery = require('./singleQuery');

class MultipleQueries {

    static generateQueries(nrOfQueries, fieldArea) {

        if (nrOfQueries < 1 || nrOfQueries > 1000000) {
            throw new Error(`Invalid amount of queries length value. Choose amount from range of 1 to 1 000 000.`);
        }

        let queriesList = [];
        for (let i = 0; i < nrOfQueries; i++) {
            queriesList.push(SingleQuery.generateQuery(fieldArea));
        }
        return queriesList;
    }
}

// const test = MultipleQueries.generateQueries(10000, 100000000);
// console.log(test);

module.exports = MultipleQueries;

