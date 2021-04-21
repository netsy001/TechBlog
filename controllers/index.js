const router = require('express').Router();
const apiRoutes = require('./api/index');
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/userRoutes', userRoutes);


module.exports = router;