const Contact = require("../../models/Contact");

const deleteContactRow = async (contactId) => {

    Contact.findOne({ where: { contact_id: contactId } })
        .then(record => {

            if (!record) {
                throw new Error('No record found');
            }

            record.destroy()
            .then(`Contact id ${contactId} deleted.`);

        })
        .catch((error) => {
            throw new Error(error);
        });
};

module.exports = deleteContactRow;

