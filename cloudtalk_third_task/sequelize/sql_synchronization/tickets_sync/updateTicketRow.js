const Ticket = require('../../models/Ticket');

const updateTicketRow = async (ticketObject) => {

    const ticketObjectEditedForSQL = {

        ticket_id: ticketObject.ticketId,
        content: ticketObject.ticketContent,
        owner_id: ticketObject.ticketOwnerId

    };

    Ticket.findOne({
        where: {
            ticket_id: ticketObject.ticketId
        }
    })
        .then(record => {

            if (!record) {
                throw new Error('No record found');
            }

            record.update(ticketObjectEditedForSQL)
                .then(console.log(`ticket updated ${ticketObject.ticketFirstname} ${ticketObject.ticketLastname}.`));

        })
        .catch((error) => {
            throw new Error(error);
        });

};


module.exports = updateTicketRow;