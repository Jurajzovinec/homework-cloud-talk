const Ticket = require("../../models/Ticket");

const insertTicketRow = async (ticketObject) => {

    const ticketObjectEditedForSQL = {

        ticket_id: ticketObject.ticketId,
        content: ticketObject.ticketContent,
        owner_id: ticketObject.ticketOwnerId
    
    };

    const ticket = await Ticket.create(ticketObjectEditedForSQL)
        .catch((error) => {
            throw new Error(error);
        });

    return ticket;
};

module.exports = insertTicketRow;

