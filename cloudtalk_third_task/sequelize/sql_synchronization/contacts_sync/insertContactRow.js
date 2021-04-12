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


    /*     
    if (contactObject.contactAssociationsTickets.length > 0) {

        const searchedTicket1 = await selectSingleTicketByTicketId(contactObject.contactAssociationsTickets[0]);  //  => TODO: synchronise tickets before contacts in syncAll();
        const searchedTicket2 = await selectSingleTicketByTicketId(contactObject.contactAssociationsTickets[1]);  //  => TODO: synchronise tickets before contacts in syncAll();
        
        await contact.addTicket(searchedTicket1);
        await contact.addTicket(searchedTicket2);

        
        contactObject.contactAssociationsTickets.length.forEach(ticketId => {
            const searchedTicket = await selectSingleTicketByTicketId(ticketId);  //  => TODO: synchronise tickets before contacts in syncAll();
            await contact.addTicket(searchedTicket);
        });
    }
    */


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
          "365065608",
          "368139037"
        ]  
};

// TESTS
(async()=>{
    await insertContactRow(testContactObj);
    displayRelations(testContactObj.contactId);
})();
*/