const { Model, DataTypes, Sequelize } = require('sequelize');

const FRANCHISES_TABLE = 'franchises';

const FranchisesSchema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },

  url: {
    type: DataTypes.STRING(256),
    allowNull: false,
    unique: true
  },

  location: {
    type: DataTypes.JSON,
    allowNull: false
  },

  createdAt:{
    type:DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    field: 'create_at'
  }

}

class Franchises extends Model {
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

module.exports = { FRANCHISES_TABLE, FranchisesSchema, Franchises };
