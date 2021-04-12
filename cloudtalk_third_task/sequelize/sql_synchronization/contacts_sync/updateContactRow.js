const selectSingleContactByContactId = require("./selectSingleContactByContactId");

const updateContactRow = async (contactObject) => {

    let ticketObjectEditForSQL = {
        contact_id: contactObject.contactId,
        firstname: contactObject.contactFirstname,
        lastname: contactObject.contactLastname,
        email: contactObject.contactEmail,
        phone: contactObject.contactPhone,
    };

    const selectedContact = await selectSingleContactByContactId(contactObject.contactId);
    
    selectedContact.update(ticketObjectEditForSQL).catch(error=>{throw error;});

};

module.exports = updateContactRow;
