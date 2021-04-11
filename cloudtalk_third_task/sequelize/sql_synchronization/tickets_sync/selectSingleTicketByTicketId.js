const Ticket = require('../../models/Ticket');

const selectSingleTicketByTicketId = async (ticketId) => {

    const selectedTicket = Ticket.findOne({
        where: {
            ticket_id: ticketId
        }
    })

        .catch((error) => {
            throw new Error(error);
        });

    return await selectedTicket;

};

module.exports = selectSingleTicketByTicketId;