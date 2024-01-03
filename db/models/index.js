import { Franchises, FranchisesSchema } from './franchises.model.js';
import { Location, LocationSchema } from './location.model.js';
import { Company, CompanySchema } from './company.model.js';

function setupModels(sequelize) {
  Franchises.init(FranchisesSchema, Franchises.config(sequelize));
  Franchises.init(LocationSchema, Location.config(sequelize));
  Franchises.init(CompanySchema, Company.config(sequelize));
};

export default setupModels;
