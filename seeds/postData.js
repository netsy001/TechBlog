const { Post } = require('../models');

const postData = [
    {
        title: "Cricket",
        content: "SRH is doing well!!!!",
        user_id: 1
    },
    {
        title: "Friday",
        content: "Hope friday gives good saturday entry!!!!",
        user_id: 2
    },
    {
        title: "Monday",
        content: "Oh nooooooooooooo....!",
        user_id: 3
    },
];

const seedPost = () => Post.bulkCreate(postData, {
    individualHooks: true
});

module.exports = seedPost;