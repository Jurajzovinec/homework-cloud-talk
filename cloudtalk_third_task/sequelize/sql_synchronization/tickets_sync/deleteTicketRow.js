const Ticket = require("../../models/Ticket");

const deleteTicketRow = async (ticketId) => {

    Ticket.findOne({ where: { ticket_id: ticketId } })
        .then(record => {

            if (!record) {
                throw new Error('No record found');
            }

            record.destroy()
            .then(`Contact id ${ticketId} deleted.`);

        })
        .catch((error) => {
            throw new Error(error);
        });
};

module.exports = deleteTicketRow;

