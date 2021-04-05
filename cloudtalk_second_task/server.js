const scrapeDataAndWriteToDb = require('./scrapers/scrapeDataAndWriteToDb');
const express = require('express');

const app = express();
const port = (process.env.NODE_ENV === 'production') ? process.env.PORT : 5050;

app.use(express.static('data'));

app.get('/api/temperature/scrape', async (req, res) => {
    console.log('api/scrape invoked . . .');

    let responseObject = {};
    try {
        await scrapeDataAndWriteToDb();
        const scrapedWeatherForecast = require('./data/scrapedWeatherForecast.json');
        validateScrapedWeatherForecastFile();
        res.status(200);
        responseObject.status = true;
        responseObject.statusCode = 200;
        responseObject.amountOfScrapedObjects = scrapedWeatherForecast.length;
    } catch (error) {
        responseObject.status = false;
        responseObject.statusCode = 503;
        responseObject.error = error.toString();
        res.status(503);
    }

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(responseObject, null, 2));

});

app.get('/api/temperature', (req, res) => {
    console.log('api/temperature invoked . . .');

    let responseObject = {};
    try {
        const scrapedWeatherForecast = require('./data/scrapedWeatherForecast.json');
        validateScrapedWeatherForecastFile();
        res.status(200);
        responseObject.status = true;
        responseObject.statusCode = 200;
        responseObject.data = scrapedWeatherForecast;
    } catch (error) {
        responseObject.status = false;
        responseObject.statusCode = 503;
        responseObject.error = error.toString();
        res.status(503);
    }

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(responseObject, null, 2));

});

app.get('/api/temperature/:identifier', (req, res) => {
    console.log('api/temperature of city invoked . . .');
    
    responseObject = {};
    const requestedCityInformation = req.params.identifier;

    // test server errors
    try {
        validateScrapedWeatherForecastFile();
    } catch (error) {
        console.log(error);
        responseObject.status = true;
        responseObject.statusCode = 503;
        responseObject.error = error.toString();
        res.status(503);
    }

    // test user input error
    try {
        const scrapedWeatherForecast = require('./data/scrapedWeatherForecast.json');
        const indexOfReturnedInformation = scrapedWeatherForecast.findIndex((cityData) => cityData.id == requestedCityInformation.toLowerCase());
        if (indexOfReturnedInformation == -1) throw new Error (`Information of ${requestedCityInformation} place does not exist.`);
        responseObject.status = true;
        responseObject.statusCode = 200;
        responseObject.index = indexOfReturnedInformation;
        responseObject.data = scrapedWeatherForecast[indexOfReturnedInformation];
        res.status(200);

    } catch (error) {
        responseObject.status = false;
        responseObject.statusCode = 404;
        responseObject.error = error.toString();
        res.status(404);
    }
 
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(responseObject, null, 2));

});

function validateScrapedWeatherForecastFile(){
    const scrapedWeatherForecast = require('./data/scrapedWeatherForecast.json');
    if (scrapedWeatherForecast == "{}") throw new Error("Any forecast has been scraped.");
    if (scrapedWeatherForecast == "[]") throw new Error("Any forecast has been scraped.");
    if (scrapedWeatherForecast == "") throw new Error("Any forecast has been scraped.");
}

app.listen(port, () => console.log(`Express server running on ${port}.`));