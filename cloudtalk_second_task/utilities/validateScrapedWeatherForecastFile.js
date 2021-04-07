const validateScrapedWeatherForecastFile = () => {

    const scrapedWeatherForecast = require('../data/scrapedWeatherForecast.json');

    if (scrapedWeatherForecast == "{}") throw new Error("Any forecast has been scraped.");
    if (scrapedWeatherForecast == "[]") throw new Error("Any forecast has been scraped.");
    if (scrapedWeatherForecast == "") throw new Error("Any forecast has been scraped.");

};

module.exports = validateScrapedWeatherForecastFile;