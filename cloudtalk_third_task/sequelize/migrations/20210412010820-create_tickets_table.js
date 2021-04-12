'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tickets', {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tickets');
  }
};
