import { Model, Sequelize } from 'sequelize';

export const COMPANY_TABLE = 'company';

export const CompanySchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  tax_number: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  location_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'locations',
      key: 'id',
    },
  },
  first_name: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
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

