const request = require("request");
const apiKey = require('../apiKey').accesHubspotAPIKey;

const deleteTicket = (ticketId) => {

    const options = {
        method: 'DELETE',
        url: `https://api.hubapi.com/crm/v3/objects/tickets/${ticketId}`,
        qs: { hapikey: apiKey },
        headers: { accept: 'application/json' }
    };

    return new Promise((resolve, reject)=>{
        request(options, function (error, response, body) {
            if (error) reject(error);
            resolve(`ticket with id ${ticketId} has been deleted.`);
        });
    });


};

module.exports = deleteTicket;



