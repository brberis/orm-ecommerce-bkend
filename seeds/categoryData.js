const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tools & Machines',
  },
  {
    category_name: 'Uniforms',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
