const consoleEndpoints = () => {

    console.log('\x1b[36m%s\x1b[0m', `Temperature forecast server running on http://localhost:${port}\n`);
    console.log(`Endpoints to test:\n`);
    console.log(`http://localhost:${port}/api/temperature/scrape`);
    console.log(`http://localhost:${port}/api/temperature`);
    console.log(`http://localhost:${port}/api/temperature/kojsovka`);
    console.log(`http://localhost:${port}/api/temperature/atlantida`);

};

module.exports = consoleEndpoints;