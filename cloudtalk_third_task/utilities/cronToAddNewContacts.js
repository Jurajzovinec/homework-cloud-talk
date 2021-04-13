const postNewContact = require('../hubspot_API/postNewContact');
const generateRandomContactObject = require('./generateRandomContactObject');
const cron = require('node-cron');
const shell = require('shelljs');

const cronToAddNewContacts = () => {
    for (let i = 0; i < 100; i++) {
        const randomObject = generateRandomContactObject();
        postNewContact(randomObject);
    }
};

// spam 100 of new contacts every 20 secs.
cron.schedule("/20 * * * * *", () => {
    cronToAddNewContacts();
    if(shell.exec("dir").code !==0){
        console.log('SomethingWentWrong');
    }
});

// module.exports = cronToAddNewContacts;



