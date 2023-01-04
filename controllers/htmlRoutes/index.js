const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');
const loginpageRoutes = require('./loginpageRoutes');
const createPost = require('./createPostPageRoutes');
const profilePageRoutes = require('./profilePageRoutes');

router.use('/', homepageRoutes);
router.use('/login', loginpageRoutes);
router.use('/post', createPost);
router.use('/profile', profilePageRoutes);

module.exports = router;
