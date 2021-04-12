const ContactTickets = require("../../models/ContactTickets");

const deleteRelationRow = async (id) => {

    ContactTickets.findOne({ 
            where: { id: id } 
        })
        .then(record => {
            record.destroy()
            .then(`ContactTicket relation with id ${id} is deleted.`);

        })
        .catch((error) => {
            throw error;
        });
};

module.exports = deleteRelationRow;