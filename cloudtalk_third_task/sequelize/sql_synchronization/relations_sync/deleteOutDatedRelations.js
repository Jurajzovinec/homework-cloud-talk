const getAllContacts = require("../../../hubspot_API/getAllContacts");
const selectAllRelations = require("./selectAllRelations");

const selectSingleTicketByTicketId = require("../tickets_sync/selectSingleTicketByTicketId");
const selectSingleContactById = require("../contacts_sync/selectSingleContactByContactId");
const deleteRelationRow = require("./deleteRelationRow");

const createSimpleRelationsObjectFromApiResponse = require("./createSimplifiedObjFromApiResponse");

const deleteOutDatedRelations = async () => {

    const allContactsFromApiResponse = await getAllContacts();
    const simplifiedObject = createSimpleRelationsObjectFromApiResponse(allContactsFromApiResponse);
    let alreadyStoredRelations = await selectAllRelations();

    await Promise.all(alreadyStoredRelations.map(async (storedRel) => {

        const isRelationAlreadyStored = simplifiedObject.some(relation =>
            relation.contactId == storedRel.contactId &&
            relation.ticketId == storedRel.ticketId
        );

        if (isRelationAlreadyStored) {

            const contact = await selectSingleContactById(storedRel.contactId);
            const ticket = await selectSingleTicketByTicketId(storedRel.ticketId);

            if (contact === null || ticket === null) {
                await deleteRelationRow(storedRel.id);
            }

            if (contact !== null && ticket !== null) {
                await contact.removeTicket(ticket);
            }

        }

    }));

    return await selectAllRelations();

};

module.exports = deleteOutDatedRelations;