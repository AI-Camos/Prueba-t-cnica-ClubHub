'use strict';


/** @type {import('sequelize-cli').Migration} */

// const { FRANCHISES_TABLE, FranchisesSchema } = require('./../models/franchises.model.js')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('company', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      location_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'locations',
          key: 'id',
        },
      },
      first_name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(64),
        allowNull: false,
      },
    });

    await queryInterface.addConstraint('company', {
      fields: ['location_id'],
      type: 'foreign key',
      name: 'fk_location',
      references: {
        table: 'locations',
        field: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });
  },

  async down (queryInterface) {
        await queryInterface.dropTable('company');
  }
};

