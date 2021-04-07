const puppeteer = require('puppeteer');

const getListOfCities = async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.shmu.sk/sk/?page=1&id=meteo_num_alad&mesto=ZILINA', { waitUntil: 'networkidle2' });
    const citiesEventHandler = (await page.$x('//*[@id="maincontent"]/div/form/p[1]/select'))[0];

    let cities = await page.evaluate(element => {
        return element.innerText.trim().split("\n");
    }, citiesEventHandler);

    await browser.close();
    return cities;

};

module.exports = getListOfCities;

