const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Category model
class Category extends Model {}

// create fields/columns for Category model
Category.init(
  {
    // category id - doesn't allow null values - set as primary key and it's auto increment
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // category name - string - not null - doesn't allow null values
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'category'
  }
);

module.exports = Category;
