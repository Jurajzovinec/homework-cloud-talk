const selectSingleTicketByTicketId = require("../tickets_sync/selectSingleTicketByTicketId");

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

module.exports = createRelationContactTickets;