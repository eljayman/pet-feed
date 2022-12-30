const { Comment } = require('../models');
const commentSeedData = require('./comment-seed-data.json');

const seedComments = () => Comment.bulkCreate(commentSeedData);

module.exports = seedComments;
