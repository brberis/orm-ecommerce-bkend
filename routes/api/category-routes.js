const router = require('express').Router();
const { Category } = require('../../models');

router.get('/', (req, res) => {
  Category.findAll()
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {category_name: 'Some Category'}
  Category.create({
    category_name: req.body.name,
  })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
