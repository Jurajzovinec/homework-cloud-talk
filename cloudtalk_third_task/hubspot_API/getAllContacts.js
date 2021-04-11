const apiKey = require('../apiKey').accesHubspotAPIKey;
const hubspot = require('@hubspot/api-client');

const getAllContacts = async () => {

    const hubspotClient = new hubspot.Client({
        apiKey: apiKey,
    });

    const allContactsObjects = await hubspotClient.crm.contacts.getAll(
        limit = undefined,
        after = undefined,
        properties = ['firstname', 'lastname', 'phone', 'email'],
        associations = ['ticket']
    );

    return extractIdAndContentFromTicketObject(allContactsObjects);

};

const extractIdAndContentFromTicketObject = (allContactsObjects) => {

    const extractedContactInformationArray = allContactsObjects.map((singleContactObject) => {

        const checkIfAssociatiotedTicketsExist = () => {
            
            let tickets;
            
            try{
                tickets = singleContactObject.associations.tickets.results;
            } catch (error){
                if(error instanceof TypeError) return [];
                throw error;
            }
            
            return tickets.map(result => result.id);
        };

        const contactId = parseInt(singleContactObject.id); // the same as vid
        const contactFirstname = singleContactObject.properties.firstname;
        const contactLastname = singleContactObject.properties.lastname;
        const contactEmail = singleContactObject.properties.email;
        const contactPhone = singleContactObject.properties.phone;
        const contactCreateDate = singleContactObject.properties.createdate;
        const contactLastModifiedDate = singleContactObject.properties.lastmodifieddate;
        const contactAssociationsTickets = checkIfAssociatiotedTicketsExist();

        return {
            contactId,
            contactFirstname,
            contactLastname,
            contactEmail,
            contactPhone,
            contactCreateDate,
            contactLastModifiedDate,
            contactAssociationsTickets
        };

    });

    return extractedContactInformationArray;

};


// Development: Store all the users's contacts in .json file.

/*
const fs = require('fs');
(async () => {
    const allContacts = await getAllContacts();
    fs.writeFileSync("contacts.json", JSON.stringify(allContacts, null, 2));
})();
*/

module.exports = getAllContacts;