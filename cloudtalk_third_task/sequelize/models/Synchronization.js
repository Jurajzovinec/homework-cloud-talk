const Sequelize = require("sequelize");



module.exports = sequelize.define("Synchronization", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    synchronization_time: {
        type: Sequelize.STRING(300),
        allowNull: false,
    },
    added_tickets: {
        type: Sequelize.INTEGER(100),
    },
    deleted_tickets: {
        type: Sequelize.INTEGER(100),
    },
    updated_tickets: {
        type: Sequelize.INTEGER(100),
    },
    added_contacts: {
        type: Sequelize.INTEGER(100),
    },
    deleted_contacts: {
        type: Sequelize.INTEGER(100),
    },
    updated_contacts: {
        type: Sequelize.INTEGER(100),
    },
}, {
    timestamps: false
});
