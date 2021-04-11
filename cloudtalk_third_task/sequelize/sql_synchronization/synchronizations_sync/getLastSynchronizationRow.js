const Synchronization = require('../../models/Synchronization');

const getLastSynchronizationRow = async () => {

    const lastSynchronizationRow = await Synchronization.findOne({
        order: [['id', 'DESC']],
    }).catch(error => {
        throw new Error(error);
    });

    return lastSynchronizationRow;

};

module.exports = getLastSynchronizationRow;