const Sequelize = require("sequelize");
const sequelize = require("../connectionToDatabase");

const Ticket = require("./Ticket");

const Contact = sequelize.define("Contact", {

    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    contact_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        unique: true
    },
    firstname: {
        type: Sequelize.STRING(300),
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING(300),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(300),
    },
    phone: {
        type: Sequelize.STRING(300),
    },
    create_date: {
        type: Sequelize.STRING(300),
        allowNull: false,
    }
}, {
    timestamps: false
});

// Contact.belongsToMany(Ticket, { through: 'ContactTickets' });

module.exports = Contact;