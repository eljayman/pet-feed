const { User } = require('../models');

const userData = [
  {
    name: 'Leland',
    email: 'leland@mail.com',
    password: 'password',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
