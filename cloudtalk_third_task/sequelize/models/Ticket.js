const Sequelize = require("sequelize");
const sequelize = require("../connectionToDatabase");
const Contact = require("./Contact");

const Ticket = sequelize.define("Ticket", {
    /*
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    */
    ticket_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    content: {
        type: Sequelize.STRING(300)
    },
    owner_id: {
        type: Sequelize.INTEGER(11),
    }
}, {
    timestamps: false
});


module.exports = Ticket;