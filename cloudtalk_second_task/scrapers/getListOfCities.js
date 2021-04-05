const puppeteer = require('puppeteer');

async function getListOfCities() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.shmu.sk/sk/?page=1&id=meteo_num_alad&mesto=ZILINA', { waitUntil: 'networkidle2' });
    const citiesEventHandle = (await page.$x('/html/body/div[2]/div[4]/div[2]/div[5]/div/form/p[1]/select'))[0];

    let cities = await page.evaluate(element => {
        return element.innerText.trim().split("\n");
    }, citiesEventHandle);

    await browser.close();
    return cities;

}

module.exports = getListOfCities;

