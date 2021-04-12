const Sequelize = require("sequelize");
const sequelize = require("../connectionToDatabase");

const Ticket = sequelize.define("Ticket", {

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