const priorities = require('./data/random_tickets/ticketPriorities.json');
const subjects = require('./data/random_tickets/ticketSubjects.json');
const ownerIds = require('./data/random_tickets/ticketOwnerIds.json');

const generateRandomTicketObject = () => {

    const stage = Math.floor(Math.random() * 5).toString();
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const ownerId = ownerIds[Math.floor(Math.random() * ownerIds.length)];

    return {
        properties: {
            "content": subject,
            "hs_pipeline": "0",
            "hs_pipeline_stage": stage,
            "hs_ticket_category": null,
            "hs_ticket_priority": priority,
            "subject": subject.split(' ')[0],
        }
    };
};

module.exports = generateRandomTicketObject;