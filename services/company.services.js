import models from '../libs/sequelize.js';
import boom from '@hapi/boom';


class CompanyServices {
  constructor() {}

  async create(data) {
    const newCompany = await models.Company.create(data);
    return newCompany;
  }

  async find(){
    const rta = await models.Company.findAll();
    return rta;
  }

  async finOne(id) {
    const company = await models.Company.findByPk(id);
    if (!company) {
      throw boom.notFound('Franchise not found');
    }
    return company;
  }

  async update(id, changes) {
    const company = await this.finOne(id);
    const rta = await company.update(changes);
    return rta;
  }

  async delete(id) {
    const company = await this.finOne(id);
    await company.destroy();
    return { id };
  }
};

export default CompanyServices;
