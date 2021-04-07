const puppeteer = require('puppeteer');
const capitalizeFirstLetter = require('../utils/capitalizeFirstLetter');

async function getWeatherForecastForAllCities(cities) {

    let allCities = cities;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let outputData = [];

    async function getAllCitiesObjectsRecursively(allCities) {

        if (allCities.length == 0) { // Base case
            await browser.close();
            return outputData;
        } else {

            const city = allCities[0];
            await page.goto(`http://www.shmu.sk/sk/?page=1&id=meteo_num_alad&mesto=${city}`, { waitUntil: 'networkidle2' });
            const forecastTextEventHandle = (await page.$x('/html/body/div[2]/div[4]/div[2]/div[5]/div/pre[1]'))[0];

            let temperatures = await page.evaluate(element => {
                const thirdLineOfTextBlockArray = element.textContent.split("\n")[2].split(" ");
                let temperaturesOnly = thirdLineOfTextBlockArray.filter(word => !isNaN(word));
                return temperaturesOnly;
            }, forecastTextEventHandle);

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
    }

    return await getAllCitiesObjectsRecursively(allCities);

}

module.exports = getWeatherForecastForAllCities;


