'use strict';

module.exports = {

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contacts', {
      /*
      id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
      },
      */
      contact_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          unique: true,
          primaryKey: true,
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
  });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contacts');
  }

};
