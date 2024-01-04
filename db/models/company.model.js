import { Model, Sequelize } from 'sequelize';


export const COMPANY_TABLE = 'company';

export const CompanySchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  location_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'locations',
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
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
  static associate(models) {
    this.hasOne(models.Franchises, {as: 'Franchises', foreignKey: 'company_id'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: COMPANY_TABLE,
      modelName: 'company',
      timestamps: false
    }
  }
}

