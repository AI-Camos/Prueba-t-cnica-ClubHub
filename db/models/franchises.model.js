import { Model, DataTypes, Sequelize } from 'sequelize';

export const FRANCHISES_TABLE = 'franchises';

export const FranchisesSchema = {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },

  company_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  title: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: false
  },

  site_name: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true
  },

  description:{
    type: DataTypes.STRING(512),
    allowNull: false,
    unique: false
  },

  image: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true
  },

  url: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true
  },

  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  createdAt:{
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field: 'create_at'
  }

}

export class Franchises extends Model {
  static associate() {
    //associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: FRANCHISES_TABLE,
      modelName: 'Franchises',
      timestamps: false
    }
  }
}

