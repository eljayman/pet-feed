const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  res.render('createPostPage', {
    loggedIn: req.session.logged_in,
  });
});

module.exports = router;
