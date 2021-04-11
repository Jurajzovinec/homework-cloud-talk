const createRelationContactTickets = require("./createRelationContactTickets");
const selectSingleContactByContactId = require("./selectSingleContactByContactId");

const updateContactRow = async (contactObject) => {

    let ticketObjectEditForSQL = {
        contact_id: contactObject.contactId,
        firstname: contactObject.contactFirstname,
        lastname: contactObject.contactLastname,
        email: contactObject.contactEmail,
        phone: contactObject.contactPhone,
    };

    const selectedContact = selectSingleContactByContactId(contactObject.contactId);
    // update contact properties
    selectedContact.update(ticketObjectEditForSQL).catch(error=>{throw error;});

    // update contact associations
    await createRelationContactTickets(selectedContact, contactObject.contactAssociationsTickets);

};

module.exports = updateContactRow;

/*
const fs = require('fs');
const displayRelations = async (displayId) => {

    await Contact.findOne({
        where: {
            contact_id: displayId
        },
        include: [Ticket]
    }).then(record => {
        console.log(record);
        fs.writeFileSync("result.json", JSON.stringify(record, null, 2));
    });

};

const testContactObj = {
    "contactId": 9996,
    "contactFirstname": "Alexej",
    "contactLastname": "Johns",
    "contactEmail": "alexej.johns@nonsense.com",
    "contactPhone": "+42$ 583009",
    "contactCreateDate": "2021-04-07T18:06:13.252Z",
    "contactLastModifiedDate": "2021-04-07T18:07:05.991Z",
    "contactAssociationsTickets": [
        //"365065608",
        "368139037"
    ]
};

// TESTS
(async () => {
    await updateContactRow(testContactObj);
    displayRelations(testContactObj.contactId);
})();
*/