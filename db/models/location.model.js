import { Model, Sequelize } from 'sequelize';

export const LOCATION_TABLE = 'locations';

export const LocationSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  country: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  zip_code: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
}

export class Location extends Model {
  static associate() {
    //associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'locations',
      timestamps: false
    }
  }
}

