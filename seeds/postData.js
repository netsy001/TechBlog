const { Post } = require('../models');

const postData = [
    {
        name: "Cricket",
        description: "SRH is doing well!!!!",
        user_id: 1
    },
    {
        name: "Friday",
        description: "Hope friday gives good saturday entry!!!!",
        user_id: 2
    },
    {
        name: "Monday",
        description: "Oh nooooooooooooo....!",
        user_id: 3
    },
];

const seedPost = () => Post.bulkCreate(postData, {
    individualHooks: true
});

module.exports = seedPost;