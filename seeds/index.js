const userSeedData = require('./user-seed-data.json');
const postSeedData = require('./post-seed-data.json');

const { User, Post } = require('./../models/index');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n-----USERS SEEDED -----\n');

  for (const post of postSeedData) {
    const newPost = await Post.create({
      ...post,
    });
  }
  console.log('\n------ POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();
