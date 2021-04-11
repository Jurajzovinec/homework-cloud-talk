const getAllContacts = require("../../../hubspot_API/getAllContacts");

const insertContactRow = require('./insertContactRow');
const deleteContactRow = require('./deleteContactRow');
const updateContactRow = require('./updateContactRow');
const selectContactIds = require('./selectContactIds');

const syncAllContacts = async (lastSynchronizationDate) => {

    const allContacts = await getAllContacts();

    let updated_contacts = 0;
    let added_contacts = 0;
    let deleted_contacts = 0;

    let contactIds = [];

    const alreadyStoredContactIds = await selectContactIds();

    allContacts.forEach(contactObject => {

        if (alreadyStoredContactIds.includes(contactObject.contactId)) {
            const contactLastUpdated = new Date(contactObject.contactLastModifiedDate);
            if (contactLastUpdated > lastSynchronizationDate) {
                updateContactRow(contactObject);
                updated_contacts++;
            }
        }

        if (!alreadyStoredContactIds.includes(contactObject.contactId)) {
            insertContactRow(contactObject);
            added_contacts++;
        }

        contactIds.push(contactObject.contactId);

    });

    alreadyStoredContactIds.forEach(storedContactId => {

        if (!contactIds.includes(storedContactId)) {
            deleteContactRow(storedContactId);
            deleted_contacts++;
        }

    });

    return {
        updated_contacts,
        added_contacts,
        deleted_contacts
    };

};

module.exports = syncAllContacts;