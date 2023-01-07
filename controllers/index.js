const router = require('express').Router();
const apiRoutes = require('./api/index');
const htmlRoutes = require('./htmlRoutes/index');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
router.get('/404', (req, res) => {
  res.render('error');
});
router.get('*', (req, res) => {
  res.redirect('/404');
});
module.exports = router;
