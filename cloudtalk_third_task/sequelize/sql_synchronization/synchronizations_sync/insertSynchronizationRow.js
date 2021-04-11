const Synchronization = require('../../models/Synchronization');

const insertSynchronizationRow = async (synchronizationObject) => {
    
    await Synchronization.create(synchronizationObject)
        .catch(error => {
            throw new Error(error);
        });

};

module.exports = insertSynchronizationRow;