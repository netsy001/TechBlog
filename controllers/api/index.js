const router = require('express').Router();
const userRoutes = require('./userRoute');
const postRoutes = require('./postRoutes')
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/replies', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;