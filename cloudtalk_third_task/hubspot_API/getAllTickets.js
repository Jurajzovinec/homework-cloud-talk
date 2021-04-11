const apiKey = require('../apiKey').accesHubspotAPIKey;
const request = require("request");

const getAllTickets = async () => {

  let allTickets = [];

  const getPagedTickets = (offset) => {

    const offsetPage = offset ? offset : 0;

    const options = {
      method: 'GET',
      url: 'https://api.hubapi.com/crm-objects/v1/objects/tickets/paged',
      qs: { limit: '10', archived: 'false', hapikey: apiKey, offset: offsetPage, properties: 'content', associations:'contact' },
      headers: { accept: 'application/json' }
    };

    return new Promise((resolve, reject) => {
      
      request(options, (error, response, body) => {

        if (error) reject(error);
        
        const responseArrayOfTickets = (JSON.parse(body));

        allTickets = [...allTickets, ...extractIdAndContentFromTicketObject(responseArrayOfTickets.objects)];

        if (responseArrayOfTickets.hasMore) {
          resolve(getPagedTickets(responseArrayOfTickets.offset));
        }

        if (responseArrayOfTickets.hasMore === false) {
          resolve(allTickets);
        }

      });
    });
  };

  return await getPagedTickets();

};

const extractIdAndContentFromTicketObject = (ticketObjectArray) => {

  const extractedTicketInformationArray = ticketObjectArray.map(singleTicketObject => {

    const ticketId = singleTicketObject.objectId;
    const ticketContent = singleTicketObject.properties.content.versions[0].value;
    const ticketOwnerId = singleTicketObject.portalId;
    const ticketLastModifiedDate = new Date(singleTicketObject.properties.content.versions[0].timestamp);
  
    return {
      ticketId,
      ticketContent,
      ticketOwnerId,
      ticketLastModifiedDate
    };
    
  });

  return extractedTicketInformationArray;

};

// Development: Store all the users's tickets in .json file.

/*
const fs = require('fs');
(async () => {
  const allTickets = await getAllTickets();
  fs.writeFileSync("tickets.json", JSON.stringify(allTickets, null, 2));
})();
*/


module.exports = getAllTickets;