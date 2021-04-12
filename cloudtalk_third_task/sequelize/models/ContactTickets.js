const Sequelize = require("sequelize");

const Ticket = require("./Ticket");
const Contact = require("./Contact");

const ContactTickets = sequelize.define("ContactTickets", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    contact_id:{
        type: Sequelize.INTEGER(11),
        
    },
    ticket_id:{
        type: Sequelize.INTEGER(11),
    }
}, {
    timestamps: false
});

Contact.belongsToMany(Ticket, { through: 'ContactTickets', foreignKey:'contact_id' });
Ticket.belongsToMany(Contact, { through: 'ContactTickets', foreignKey:'ticket_id' });

module.exports = ContactTickets;
