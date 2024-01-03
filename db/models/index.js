import { Franchises, FranchisesSchema } from './franchises.model.js';
import { Location, LocationSchema } from './location.model.js';
import { Company, CompanySchema } from './company.model.js';

function setupModels(sequelize) {
  Franchises.init(FranchisesSchema, Franchises.config(sequelize));
  Location.init(LocationSchema, Location.config(sequelize));
  Company.init(CompanySchema, Company.config(sequelize));
};

export default setupModels;
