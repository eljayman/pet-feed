const { Pet } = require('../models');

const petData = [];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
