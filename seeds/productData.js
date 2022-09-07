const { Product } = require('../models');

const productData = [
  {
    product_name: 'Big toolbox', 
    price: 129.99, 
    stock: 12, 
    category_id: 1,
    tagIds: [1, 2]
  },
  {
    product_name: 'Cuter machine', 
    price: 429.99, 
    stock: 6, 
    category_id: 1,
    tagIds: [1, 2]
  },
  {
    product_name: 'Boots', 
    price: 120.00, 
    stock: 32, 
    category_id: 2,
    tagIds: [1, 2, 3]
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
