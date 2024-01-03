'use strict';



/** @type {import('sequelize-cli').Migration} */

// const { FRANCHISES_TABLE, FranchisesSchema } = require('./../models/franchises.model.js')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      country: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      zip_code: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      state: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('location');
  }
};
