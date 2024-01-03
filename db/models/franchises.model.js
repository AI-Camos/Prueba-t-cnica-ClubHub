import { Model, Sequelize } from 'sequelize';

export const FRANCHISES_TABLE = 'franchise';

export const FranchisesSchema = {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  company_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: {
      model: 'company',
      key: 'id',
    },
  },
  title: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
  site_name: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(512),
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  url: {
    type: Sequelize.STRING(256),
    allowNull: false,
  },
  protocol: {
    type: Sequelize.STRING(16),
    allowNull: false,
  },
  domain_jumps: {
    type: Sequelize.SMALLINT,
    allowNull: false,
  },
  server_names: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    allowNull: false,
  },
  registrant_name: {
    type: Sequelize.STRING(128),
    allowNull: false,
  },
  registrant_email: {
    type: Sequelize.STRING(128),
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
}

export class Franchises extends Model {
  static associate() {
    // this.belongsTo(models.location, {as: 'Location'})
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

