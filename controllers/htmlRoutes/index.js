const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');
const loginpageRoutes = require('./loginpageRoutes');

router.use('/', homepageRoutes);
router.use('/login', loginpageRoutes);

module.exports = router;
