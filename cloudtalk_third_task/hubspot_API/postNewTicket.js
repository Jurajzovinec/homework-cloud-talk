const request = require("request");
const apiKey = require('../apiKey').accesHubspotAPIKey;

const postNewTicket = async (ticketObject) => {

  const options = {
    method: 'POST',
    url: 'https://api.hubapi.com/crm/v3/objects/tickets',
    qs: { hapikey: apiKey },
    headers: { accept: 'application/json', 'content-type': 'application/json' },
    body: ticketObject,
    json: true
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  });
  
};

module.exports = postNewTicket;
