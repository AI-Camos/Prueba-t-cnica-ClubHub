const { Franchises, FranchisesSchema } = require('./franchises.model');

function setupModels(sequelize) {
  Franchises.init(FranchisesSchema, Franchises.config(sequelize));
};

module.exports = setupModels;
