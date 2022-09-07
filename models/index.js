// import all models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// create associations
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

Category.hasMany(Product, {
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

module.exports = { Category, Product, Tag, ProductTag };
