'use strict';


/** @type {import('sequelize-cli').Migration} */

import { COMPANY_TABLE, CompanySchema } from './../models/company.model.js';
import { LOCATION_TABLE, LocationSchema } from './../models/location.model.js';

// const { FRANCHISES_TABLE, FranchisesSchema } = require('./../models/franchises.model.js')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COMPANY_TABLE, CompanySchema);
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
  },

  async down (queryInterface) {
    await queryInterface.drop(COMPANY_TABLE);
    await queryInterface.drop(LOCATION_TABLE);
  }
};

