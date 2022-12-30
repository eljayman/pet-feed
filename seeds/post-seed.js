const { Post } = require('../models');
const postSeedData = require('./post-seed-data.json');

const seedPosts = () => Post.bulkCreate(postSeedData);

module.exports = seedPosts;
