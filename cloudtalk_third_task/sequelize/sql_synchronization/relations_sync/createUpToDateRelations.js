const getAllContacts = require("../../../hubspot_API/getAllContacts");
const selectAllRelations = require("./selectAllRelations");

const selectSingleTicketByTicketId = require("../tickets_sync/selectSingleTicketByTicketId");
const selectSingleContactsById = require("../contacts_sync/selectSingleContactByContactId");

const createSimpleRelationsObjectFromApiResponse = require("./createSimplifiedObjFromApiResponse");

const createUpToDateRelations = async () => {

    const allContactsFromApiResponse = await getAllContacts();
    const simplifiedArrayObject = createSimpleRelationsObjectFromApiResponse(allContactsFromApiResponse);
    let alreadyStoredRelations = await selectAllRelations();

    await Promise.all(simplifiedArrayObject.map(async (simpleObjFromApi) => {

        const isRelationAlreadyLoaded = alreadyStoredRelations.some(relation => 
            relation.contactId == alreadyStoredRelations.contactId &&
            relation.ticketId == alreadyStoredRelations.ticketId
        );

        if(!isRelationAlreadyLoaded){
            
            const contact = await selectSingleContactsById(simpleObjFromApi.contactId);
            const ticket = await selectSingleTicketByTicketId(simpleObjFromApi.ticketId);

            await contact.addTicket(ticket);
        }
    
    }));

    return await selectAllRelations();

};

module.exports = createUpToDateRelations;