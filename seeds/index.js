const sequelize = require('../config/connection');
const seedCategories = require('./categoryData');
const seedTags = require('./tagData');
const seedProducts = require('./productData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedTags();
  
  await seedCategories();

  await seedProducts();

  process.exit(0);
};

seedAll();
