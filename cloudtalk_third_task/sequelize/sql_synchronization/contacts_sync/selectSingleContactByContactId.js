const Ticket = require('../../models/Ticket');
const Contact = require('../../models/Contact');

const selectSingleContactByContactId = async (contactId) => {

    const selectedContact = await Contact.findOne(
        {
        where: {
            contact_id: contactId
        },
        include: [Ticket]
    }).catch(error => {
        throw error;
    });

    return selectedContact;

};

module.exports = selectSingleContactByContactId;