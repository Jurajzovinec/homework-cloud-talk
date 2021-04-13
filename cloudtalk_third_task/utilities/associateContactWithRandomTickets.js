const getAllTickets = require('../hubspot_API/getAllTickets');
const getAllContacts = require('../hubspot_API/getAllContacts');
const divideArrayIntoChunks = require('./divideArrayIntoChunks');
const putAssociationContactTicket = require('../hubspot_API/putAssociationContactTicket');

const associateContactWithRandomTickets = async () => {

    const allTickets = await getAllTickets();
    const allContacts = await getAllContacts();

    const allContactsChunks = divideArrayIntoChunks(allContacts, 100);

    await Promise.all(allContactsChunks.map(async (chunk) => {
        
        await Promise.all(chunk.map(async (contactObject) => {

            const ticketObject1 = allTickets[Math.floor(Math.random() * allTickets.length)];

            await putAssociationContactTicket(contactObject.contactId, ticketObject1.ticketId);
        
        }));

    }));

};

module.exports = associateContactWithRandomTickets;