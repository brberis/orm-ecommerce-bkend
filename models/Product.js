const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    // product id - doesn't allow null values - set as primary key and it's auto increment
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // product name - string - doesn't allow null values
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // product price - Decimal - doesn't allow null values - validates that the value is a decimal
    price: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false,
      get() { return parseFloat(this.getDataValue('price')); },
      validate: {
        isNumeric: true,
        isDecimal: true
      }
    },
    // product stock - integer - doesn't allow null values - set a default value of 10
    // validates that the value is numeric
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    // category id - integer - references the category model's id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product'
  }
);

module.exports = Product;
