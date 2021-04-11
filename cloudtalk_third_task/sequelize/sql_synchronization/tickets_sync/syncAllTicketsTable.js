const getAllTickets = require("../../../hubspot_API/getAllTickets");

const insertTicketRow = require('./insertTicketRow');
const deleteTicketRow = require('./deleteTicketRow');
const updateTicketRow = require('./updateTicketRow');
const selectTicketIds = require('./selectTicketIds');

const syncAllTickets = async (lastSynchronizationDate) => {

    const allTickets = await getAllTickets();

    let updated_tickets = 0;
    let added_tickets = 0;
    let deleted_tickets = 0;

    let ticketIds = [];

    const alreadyStoredTicketIds = await selectTicketIds();
    
    allTickets.forEach(ticketObject => {

        if (alreadyStoredTicketIds.includes(ticketObject.ticketId)) {
            const ticketLastUpdated = new Date(ticketObject.ticketLastModifiedDate);
            if (ticketLastUpdated > lastSynchronizationDate) {
                updateTicketRow(ticketObject);
                updated_tickets++;
            }
        }

        if (!alreadyStoredTicketIds.includes(ticketObject.ticketId)) {
            insertTicketRow(ticketObject);
            added_tickets++;
        }

        ticketIds.push(ticketObject.ticketId);

    });
  
    alreadyStoredTicketIds.forEach(storedTicketId => {

        if (!ticketIds.includes(storedTicketId)) {
            deleteTicketRow(storedTicketId);
            deleted_tickets++;
        }

    });
    
    return {
        updated_tickets,
        added_tickets,
        deleted_tickets
    };

};

module.exports = syncAllTickets;