'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('franchise', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      company_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: 'company',
          key: 'id',
        },
      },
      // title: {
      //   type: Sequelize.STRING(128),
      //   allowNull: false,
      // },
      site_name: {
        type: Sequelize.STRING(128),
        allowNull: false,
      },
      // description: {
      //   type: Sequelize.STRING(512),
      //   allowNull: false,
      // },
      // image: {
      //   type: Sequelize.STRING(256),
      //   allowNull: false,
      // },
      url: {
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      // protocol: {
      //   type: Sequelize.STRING(16),
      //   allowNull: false,
      // },
      // domain_jumps: {
      //   type: Sequelize.SMALLINT,
      //   allowNull: false,
      // },
      // registrant_name: {
      //   type: Sequelize.STRING(128),
      //   allowNull: false,
      // },
      // registrant_email: {
      //   type: Sequelize.STRING(128),
      //   allowNull: false,
      // },
      location_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: 'locations',
          key: 'id',
        },
      },
    });

    await queryInterface.addConstraint('franchise', {
      fields: ['location_id'],
      type: 'foreign key',
      name: 'fk_location_franchise',
      references: {
        table: 'locations',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    await queryInterface.addConstraint('franchise', {
      fields: ['company_id'],
      type: 'foreign key',
      name: 'fk_company_franchise',
      references: {
        table: 'company',
        field: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('franchise');
  }
};
