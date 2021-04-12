const Contact = require("../../models/Contact");

const insertContactRow = async (contactObject) => {

    const contactObjectEditedForSQL = {

        contact_id: contactObject.contactId,
        firstname: contactObject.contactFirstname,
        lastname: contactObject.contactLastname,
        email: contactObject.contactEmail,
        phone: contactObject.contactPhone,
        create_date: new Date(contactObject.contactCreateDate).toString(),

    };

    const contact = await Contact.create(contactObjectEditedForSQL)
        .catch((error) => {
            throw error;
        });

    return contact;
};

module.exports = insertContactRow;