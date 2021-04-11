'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacttickets', {
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
    },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contacttickets');
  }
};
