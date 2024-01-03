import { Model, DataTypes } from 'sequelize';

export const LOCATION_TABLE = 'location';

export const LocationSchema = {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },

  country: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  state: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  city:{
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  address: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  zip_code: {
    type: DataTypes.STRING(128),
    allowNull: false,
  }

}

export class Location extends Model {
  static associate() {
    //associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'Location',
      timestamps: false
    }
  }
}

