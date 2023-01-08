const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
      attributes: { exclude: ['password'] },
    });

    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: { model: User, attributes: { exclude: ['password'] } },
    });

    const user = userData.get({ plain: true });
    const posts = postData.map((post) => {
      return post.get({ plain: true });
    });

    res.render('profilePage', {
      user,
      posts,
      loggedIn: req.session.logged_in,
      isProfilePage: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
