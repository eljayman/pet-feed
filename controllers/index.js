const router = require('express').Router();
const apiRoutes = require('./api/index');
const htmlRoutes = require('./htmlRoutes/index');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;
