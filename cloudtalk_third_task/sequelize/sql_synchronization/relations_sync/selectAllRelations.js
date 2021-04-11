const ContactTickets = require('../../models/ContactTickets');

const selectAllRelations = async () => {

    const selectedRelations = await ContactTickets.findAll({
    })
        .catch((error) => {
            throw new Error(error);
        });
    
    return extractSimpleObjectsFromSelectedRelations(selectedRelations);

};

const extractSimpleObjectsFromSelectedRelations = (selectedRelations) =>{
    
    const extractedSimpleObject = selectedRelations.map(cotantTicketsObj =>{
    
        return {
            id : cotantTicketsObj.dataValues.id,
            contactId : cotantTicketsObj.dataValues.ContactId,
            ticketId : cotantTicketsObj.dataValues.TicketId
        };
    });
    
    return extractedSimpleObject;
};

// selectAllRelations();

module.exports = selectAllRelations;

