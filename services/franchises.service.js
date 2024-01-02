const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');


class FranchisesServices {
  constructor() {}

  async create(data) {
    const newFranchises = await models.Franchises.create(data);
    return newFranchises;
  }

  async find(){
    const rta = await models.Franchises.findAll();
    return rta;
  }

  async finOne(id) {
    const franchise = await models.Franchises.findByPk(id);
    if (!franchise) {
      throw boom.notFound('Franchise not found');
    }
    return franchise;
  }

  async update(id, changes) {
    const franchise = await this.finOne(id);
    const rta = await franchise.update(changes);
    return rta;
  }

  async delete(id) {
    const franchise = await this.finOne(id);
    await franchise.destroy();
    return { id };
  }
};

module.exports = FranchisesServices;
