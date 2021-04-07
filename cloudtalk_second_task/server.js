const validateScrapedWeatherForecastFile = require('./utilities/validateScrapedWeatherForecastFile');
const capitalizeFirstLetter = require('./utilities/capitalizeFirstLetter');
const scrapeDataAndWriteToDb = require('./scrapers/scrapeDataAndWriteToDb');
const express = require('express');

const app = express();
const port = (process.env.NODE_ENV === 'production') ? process.env.PORT : 5050;

app.use(express.static('data'));

app.get('/api/temperature/scrape', async (req, res) => {

    console.log('\x1b[33m%s\x1b[0m', 'api/temperature/scrape invoked . . .');

    let responseObject = {};

    try {

        await scrapeDataAndWriteToDb();

        const scrapedWeatherForecast = require('./data/scrapedWeatherForecast.json');
        validateScrapedWeatherForecastFile();
        console.log("\x1b[32m", "Temperature data have been scraped");

        res.status(200);
        responseObject.status = true;
        responseObject.statusCode = 200;
        responseObject.amountOfScrapedObjects = scrapedWeatherForecast.length;

    } catch (error) {

        responseObject.status = false;
        responseObject.statusCode = 503;
        responseObject.error = error.message;
        res.status(503);

    }

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(responseObject, null, 2));

});

app.get('/api/temperature', (req, res) => {

    console.log('\x1b[33m%s\x1b[0m', 'api/temperature invoked . . .');

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
        responseObject.error = error.message;
        res.status(503);

    }

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(responseObject, null, 2));

});

app.get('/api/temperature/:identifier', (req, res) => {

    console.log('\x1b[33m%s\x1b[0m', 'api/temperature of city invoked . . .');

    responseObject = {};
    const requestedCityInformation = req.params.identifier;

    try { // test server errors

        validateScrapedWeatherForecastFile();

    } catch (error) {

        console.log(error);
        responseObject.status = true;
        responseObject.statusCode = 503;
        responseObject.error = error.message;
        res.status(503);

    }

    try { // test user input error

        const scrapedWeatherForecast = require('./data/scrapedWeatherForecast.json');
        const indexOfReturnedInformation = scrapedWeatherForecast.findIndex((cityData) => cityData.id == requestedCityInformation.toLowerCase());

        if (indexOfReturnedInformation == -1) throw new Error(`Information about ${requestedCityInformation.capitalizeFirstLetter()} place does not exist.`);

        responseObject.status = true;
        responseObject.statusCode = 200;
        responseObject.index = indexOfReturnedInformation;
        responseObject.data = scrapedWeatherForecast[indexOfReturnedInformation];
        res.status(200);

    } catch (error) {

        responseObject.status = false;
        responseObject.statusCode = 404;
        responseObject.error = error.message;
        res.status(404);

    }

    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(responseObject, null, 2));

});

app.listen(port, () => {

    console.log('\x1b[36m%s\x1b[0m', `Temperature forecast server running on http://localhost:${port}\n`);
    console.log(`Endpoints to test:\n`);
    console.log(`http://localhost:${port}/api/temperature/scrape`);
    console.log(`http://localhost:${port}/api/temperature`);
    console.log(`http://localhost:${port}/api/temperature/kojsovka`);
    console.log(`http://localhost:${port}/api/temperature/atlantida`);

});