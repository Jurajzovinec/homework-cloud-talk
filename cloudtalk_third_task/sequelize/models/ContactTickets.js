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
    ContactId:{
        type: Sequelize.INTEGER(11),
    },
    TicketId:{
        type: Sequelize.INTEGER(11),
    }
}, {
    timestamps: false
});

Contact.belongsToMany(Ticket, { through: 'ContactTickets' });

module.exports = ContactTickets;
