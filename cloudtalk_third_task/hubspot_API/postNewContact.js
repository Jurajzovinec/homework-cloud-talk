const request = require("request");
const apiKey = require("../apiKey").accesHubspotAPIKey;

const postNewContact = async (contactObject) => {

  const options = {
    method: 'POST',
    url: 'https://api.hubapi.com/contacts/v1/contact/',
    qs: { hapikey: apiKey },
    headers: { 'Content-Type': 'application/json' },
    body: contactObject,
    json: true
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
  });

};

module.exports = postNewContact;

