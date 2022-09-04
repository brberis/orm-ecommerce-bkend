const router = require('express').Router();
const { Tag } = require('../../models');

router.get('/', (req, res) => {
  Tag.findAll()
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {tag_name: 'Some Tag'}
  Tag.create({
    tag_name: req.body.tag_name,
  
  })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
