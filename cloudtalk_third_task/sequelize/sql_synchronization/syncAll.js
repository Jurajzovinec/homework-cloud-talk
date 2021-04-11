const syncAllContacts = require('./contacts_sync/syncAllContactsTable');
const getLastSynchronizationRow = require('./synchronizations_sync/getLastSynchronizationRow');
const insertSynchronizationRow = require('./synchronizations_sync/insertSynchronizationRow');
const syncAllTickets = require('./tickets_sync/syncAllTicketsTable');

const syncAll = async () => {

    const synchronizationObject = {
        synchronization_time: new Date().toString(),
    };

    const lastSynchronizationRow = await getLastSynchronizationRow();

    const lastSynchronizationDate = lastSynchronizationRow ? new Date(lastSynchronizationRow.synchronization_time) : new Date();

    const contactSynchronizationResult = await syncAllContacts(lastSynchronizationDate);

    const ticketSynchronizationResult = await syncAllTickets(lastSynchronizationDate);

    Object.assign(
        synchronizationObject,
        contactSynchronizationResult,
        ticketSynchronizationResult
    );

    console.table(synchronizationObject);
    await insertSynchronizationRow(synchronizationObject);

};

syncAll();

module.exports = syncAll;