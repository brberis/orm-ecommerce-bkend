const { Tag } = require('../models');

const TagData = [
  {
    tag_name: 'Hardware',
  },
  {
    tag_name: 'Tools',
  },
  {
    tag_name: 'Construction',
  }
];

const seedTags = () => Tag.bulkCreate(TagData);

module.exports = seedTags;
