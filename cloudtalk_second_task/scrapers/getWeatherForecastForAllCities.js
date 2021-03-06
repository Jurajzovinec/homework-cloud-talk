const puppeteer = require('puppeteer');
const capitalizeFirstLetter = require('../utilities/capitalizeFirstLetter');

const getWeatherForecastForAllCities = async (cities) => {

    let allCities = cities;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let outputData = [];

    const getAllCitiesObjectsRecursively = async (allCities) => {
        
        if (allCities.length == 0) { // Base case
            await browser.close();
            return outputData;
        } else {

            const city = allCities[0];
            await page.goto(`http://www.shmu.sk/sk/?page=1&id=meteo_num_alad&mesto=${city}`, { waitUntil: 'networkidle2' });
            const forecastTextEventHandler = (await page.$x('//*[@id="maincontent"]/div/pre[1]'))[0];
            
            let temperatures = await page.evaluate(element => {
                const thirdLineOfTextBlockArray = element.textContent.split("\n")[2].split(" ");
                let temperaturesOnly = thirdLineOfTextBlockArray.filter(word => !isNaN(word));
                return temperaturesOnly;
            }, forecastTextEventHandler);

            const cityObject = {
                id: city.toLowerCase(),
                city: city.capitalizeFirstLetter(),
                temperature: {
                    low: temperatures[0],
                    high: temperatures[1]
                }
            };

            console.log('Scraping data for city . . . ', city);
            outputData.push(cityObject); // inject object to output array
            allCities.shift(); // reduce size of recursed array by processed city
            return await getAllCitiesObjectsRecursively(allCities);
        }
    };

    return await getAllCitiesObjectsRecursively(allCities);

};

module.exports = getWeatherForecastForAllCities;