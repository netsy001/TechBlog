const { User } = require('../models');

const userData = [
    {
        username: 'Suri',
        password: 'password123',
    },
    {
        username: 'Alekhya',
        password: 'password123',
    },
    {
        username: 'Laxmi',
        password: 'password123',
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;