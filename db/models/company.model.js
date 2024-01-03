import { Model, DataTypes, Sequelize } from 'sequelize';

export const COMPANY_TABLE = 'company';

export const CompanySchema = {
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

  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: false
  },

  tax_number: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true
  },

  first_name:{
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  last_name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
    unique: true
  },

  phone: {
    type: DataTypes.STRING(32),
    allowNull: false,
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

export class Company extends Model {
  static associate() {
    //associate
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'Company',
      timestamps: false
    }
  }
}

