const { Product, ProductTag } = require('../models');

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

// as we have a nested array, we create inside for loop instead of bulkcreate
const seedProducts = async function () {
  for (let i = 0; i < productData.length; i++) {
    await Product.create(productData[i])
    .then(product => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (productData[i].tagIds.length) {
        const productTagIdArr = productData[i].tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
};

module.exports = seedProducts;
