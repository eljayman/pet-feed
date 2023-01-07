const router = require('express').Router();
const homepageRoutes = require('./homepageRoutes');
const loginpageRoutes = require('./loginpageRoutes');
const createPost = require('./createPostPageRoutes');
const profilePageRoutes = require('./profilePageRoutes');
const updatePet = require('./update-pet-route');
const updateEmail = require('./update-email-route');
const updatePassword = require('./update-password-route');
const updateUsername = require('./update-username-route');


router.use('/', homepageRoutes);
router.use('/login', loginpageRoutes);
router.use('/post', createPost);
router.use('/profile', profilePageRoutes);
router.use('/update-pet', updatePet);
router.use('/update-email', updateEmail);
router.use('/update-password', updatePassword);
router.use('/update-username', updateUsername);

module.exports = router;
