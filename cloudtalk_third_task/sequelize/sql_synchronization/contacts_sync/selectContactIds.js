const Contact = require('../../models/Contact');

const selectContactIds = async () => {

    const alreadyStoredContactIds = (await Contact.findAll({
        attributes: ['contact_id']
    })).map(contactObj => contactObj.dataValues.contact_id);

    return alreadyStoredContactIds;
    
};

module.exports = selectContactIds;