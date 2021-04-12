const Ticket = require('../../models/Ticket');

const selectSingleTicketByTicketId = async (ticketId) => {

    const selectedTicket = await Ticket.findOne(
        {
            where: {
                ticket_id: ticketId
            }
        }).catch(error => {
            throw error;
        });

    return selectedTicket;

};

module.exports = selectSingleTicketByTicketId;