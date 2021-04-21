const { User } = require('../models');

const userData = [
    {
        name: 'Suri',
        password: 'password123',
        email:"email@SpeechGrammarList.com",
    },
    {
        name: 'Alekhya',
        password: 'password123',
        email:"email2@SpeechGrammarList.com",
    },
    {
        name: 'Laxmi',
        password: 'password123',
        email:"email1@SpeechGrammarList.com",
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;