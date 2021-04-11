const selectSingleTicketByTicketId = require("../tickets_sync/selectSingleTicketByTicketId");
const selectAllRelations = require("./selectAllRelations");
const getAllContacts = require("../../../hubspot_API/getAllContacts");

const syncRelations = async (allContacts) => {

    let alreadyStoredRelations = await selectAllRelations();

    console.log(alreadyStoredRelations);

    /*
      {
    "contactId": 1,
    "contactFirstname": "Maria",
    "contactLastname": "Johnson (Sample Contact)",
    "contactEmail": "emailmaria@hubspot.com",
    "contactPhone": null,
    "contactCreateDate": "2021-04-07T17:59:33.885Z",
    "contactLastModifiedDate": "2021-04-07T17:59:38.892Z",
    "contactAssociationsTickets": [
      "369909098"
    ]
    */
   
    const allContactsFromApiResponse = await getAllContacts();

    allContactsFromApiResponse.forEach(contactObject => {
        
        const checkIfAssociationsAreUpToDate = contactObject.contactAssociationsTickets.map(()=>{
            let isRelationAlreadyStored = alreadyStoredRelations.some(
                relation => relation.contactId == contactObject.contactId && 
                relation.ticketId == relation.ticketId
            );
            return isRelationAlreadyStored;
        });

        if(checkIfAssociationsAreUpToDate => checkIfAssociationsAreUpToDate.every(true)){
            // remove from alreadyStoredRelations
            contactObject.contactAssociationsTickets.forEach((association)=>{

            });
        }

        if(checkIfAssociationsAreUpToDate => checkIfAssociationsAreUpToDate.some(false)){
            // check which has to be removed from objs
            // do createRelationContactTickets
        }
        
        console.log(checkIfAssociationsAreUpToDate);

        /*
        if(!isRelationAlreadyStored){
            // add
        }
        */

        /*
        if(isRelationAlreadyStored){
            // remove from alreadyStoredRelations
        }
        */

    });

    // delete remaining relations

};

const createSimpleRelationsObjectFromApiResponse = (allContactsFromApiResponse) => {

    let simpleRelationObject = [];

    allContactsFromApiResponse.forEach(contactObj => {

        contactObj.contactAssociationsTickets.forEach(associationId => {

            simpleRelationObject.push({
                contactId: contactObj.contactId,
                ticketId: associationId
            });

        });
    });

    console.log(simpleRelationObject);

    return simpleRelationObject;
};

const addRelation = async () => {

};

const deleteRelation = async () => {

};

const createRelationContactTickets = async (contactInstance, ticketsIds) => {

    // delete all relations
    if (contactInstance.Tickets) {

        const alreadyAssociatedIds = contactInstance.Tickets.map(ticketAssociation => ticketAssociation.ticket_id);

        await Promise.all(alreadyAssociatedIds.map(async (alreadyAssociatedId) => {

            const searchedTicket = await selectSingleTicketByTicketId(alreadyAssociatedId);

            await contactInstance.removeTicket(searchedTicket);

        }));

    }

    // add new relations
    if (ticketsIds.length > 0) {

        await Promise.all(ticketsIds.map(async (ticketsId) => {

            const searchedTicket = await selectSingleTicketByTicketId(ticketsId);

            await contactInstance.addTicket(searchedTicket);

        }));
    }

};

const createRelationContactTicketsForSingle = async (contactId, ticketId) => {
    /*
    const contact = 
    
    // delete all relations
    if (contactInstance.Tickets) {

        const alreadyAssociatedIds = contactInstance.Tickets.map(ticketAssociation => ticketAssociation.ticket_id);

        await Promise.all(alreadyAssociatedIds.map(async (alreadyAssociatedId) => {

            const searchedTicket = await selectSingleTicketByTicketId(alreadyAssociatedId);

            await contactInstance.removeTicket(searchedTicket);

        }));

    }
    

    // add new relations
    if (ticketsIds.length > 0) {

        await Promise.all(ticketsIds.map(async (ticketsId) => {

            const searchedTicket = await selectSingleTicketByTicketId(ticketsId);

            await contactInstance.addTicket(searchedTicket);

        }));
    }
    */

};



syncRelations();

module.exports = syncRelations;


/*
{ id: 1, contactId: 1009, ticketId: 1 },
*/

/*
allContacts.forEach(contactObject => {
    let skipObject = alreadyStoredRelations.some(relation => relation.contactId === contactObject.contactId && relation.ticketId === relation.ticketId);
    // if(alreadyStoredRelations.filter)
    // if is not here create
    // if is here skip
});
*/

    // remaining in stored delete