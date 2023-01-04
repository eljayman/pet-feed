const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');
const loginpageRoutes = require('./loginpageRoutes');
const createPost = require('./createPostPageRoutes');

router.use('/', homepageRoutes);
router.use('/login', loginpageRoutes);
router.use('/createPost', createPost);

module.exports = router;
