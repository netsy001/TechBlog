const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const fullComment = await Comment.findAll({});
        res.status(200).json(fullComment)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const firstComment = await Comment.create({
            ...req.body,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });
        console.log(firstComment);
        res.status(200).json(firstComment);
        if (!firstComment) {
            res.status(404).json({ message: `not found :(` })
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;