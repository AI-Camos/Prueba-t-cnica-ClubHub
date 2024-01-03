'use strict';



/** @type {import('sequelize-cli').Migration} */

import { FRANCHISES_TABLE, FranchisesSchema } from './../models/franchises.model.js';

// const { FRANCHISES_TABLE, FranchisesSchema } = require('./../models/franchises.model.js')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(FRANCHISES_TABLE, FranchisesSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(FRANCHISES_TABLE);
  }
};
