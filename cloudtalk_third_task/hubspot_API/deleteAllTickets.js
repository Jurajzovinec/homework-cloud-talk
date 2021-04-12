const deleteTicket = require("./deleteTicket");
const getAllTickets = require("./getAllTickets");
const divideArrayIntoChunks = require("../utilities/divideArrayIntoChunks");

const deleteAllTickets = async () => {

    const allTickets = await getAllTickets();
    const allTicketsDividedIntoChunks = divideArrayIntoChunks(allTickets, 50);

    await Promise.all(allTicketsDividedIntoChunks.map(async (chunk) => {
        
        await Promise.all(chunk.map(async (ticketObject) => {

            await deleteTicket(ticketObject.ticketId);
        
        }));

    }));

};

module.exports = deleteAllTickets;



