const Ticket = require('../../models/Ticket');
const Contact = require('../../models/Contact');

const selectSingleContactByContactId = async (contactId) => {

    const selectedContact = await Contact.findOne(
        {
        where: {
            contact_id: contactObject.contactId
        },
        include: [Ticket]
    }).catch(error => {
        throw error;
    });

    return await selectedContact;

};

module.exports = selectSingleContactByContactId;