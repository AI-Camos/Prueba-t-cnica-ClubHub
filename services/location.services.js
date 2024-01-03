import { Location }  from '../db/models/location.model.js';

import boom from '@hapi/boom';


class LocationServices {
  constructor() {}

  async create(data) {
    const newLocation = await Location.create(data);
    return newLocation;
  }

  async find(){
    const rta = await Location.findAll();
    return rta;
  }

  async finOne(id) {
    const location = await Location.findByPk(id);
    if (!location) {
      throw boom.notFound('Franchise not found');
    }
    return location;
  }

  async update(id, changes) {
    const location = await this.finOne(id);
    const rta = await location.update(changes);
    return rta;
  }

  async delete(id) {
    const location = await this.finOne(id);
    await location.destroy();
    return { id };
  }
};

export default LocationServices;
