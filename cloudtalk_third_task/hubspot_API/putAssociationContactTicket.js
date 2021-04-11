const request = require("request");
const apiKey = require("../apiKey").accesHubspotAPIKey;

const putAssociationContactTicket = async (contactId, ticketId) => {

    const putBody = {
        "fromObjectId": contactId,
        "toObjectId": ticketId,
        "category": "HUBSPOT_DEFINED",
        "definitionId": 15
    };

    const options = {
        method: 'PUT',
        url: 'https://api.hubapi.com/crm-associations/v1/associations',
        qs: { hapikey: apiKey },
        headers: { 'Content-Type': 'application/json' },
        body: putBody,
        json: true
    };

    return await request(options, (error, response, body) => {
        
        if (error) throw new Error(error);
        
        if (response.statusCode==204) console.log('Associations has been created!');
    });

};

/*
(async()=>{
    await putAssociationContactTicket();
})();
*/

module.exports = putAssociationContactTicket;