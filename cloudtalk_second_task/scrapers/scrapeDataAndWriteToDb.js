const fs = require('fs');
const getWeatherForecastForAllCities = require('./getWeatherForecastForAllCities');
const getListOfCities = require('./getListOfCities');

const scrapeDataAndWriteToDb = async() =>{

    const scrapedData = await getWeatherForecastForAllCities(await getListOfCities());
    const storedData = JSON.stringify(await scrapedData, null, 2);
    
    fs.writeFileSync("data/scrapedWeatherForecast.json", storedData);

};

module.exports = scrapeDataAndWriteToDb;

/*

async function scrapeDataAndWriteToDb(){
    const scrapedData = await getWeatherForecastForAllCities(await getListOfCities());
    const storedData = JSON.stringify(await scrapedData, null, 2);
    fs.writeFileSync("data/scrapedWeatherForecast.json", storedData);
}


*/