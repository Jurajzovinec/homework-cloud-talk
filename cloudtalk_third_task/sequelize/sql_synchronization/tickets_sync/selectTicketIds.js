const Ticket = require('../../models/Ticket');

const selectTicketIds = async () => {

    let alreadyStoredTicketIds = [];

    alreadyStoredTicketIds = (await Ticket.findAll({
        attributes: ['ticket_id']
    })).map(ticketObj => ticketObj.dataValues.ticket_id);

    return alreadyStoredTicketIds;
    
};

module.exports = selectTicketIds;