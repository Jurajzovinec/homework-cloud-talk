const postNewTicket = require('../hubspot_API/postNewTicket');
const generateRandomTicketObject = require('./generateRandomTicketObject');
const cron = require('node-cron');
const shell = require('shelljs');

const cronToAddNewTickets = () => {
    for (let i = 0; i < 100; i++) {
        const randomObject = generateRandomTicketObject();
        postNewTicket(randomObject);
    }
};

// spam 100 of new tickets every 10 secs.
cron.schedule("*/10 * * * * *", () => {
    cronToAddNewTickets();
    if(shell.exec("dir").code !==0){
        console.log('SomethingWentWrong');
    }
});




