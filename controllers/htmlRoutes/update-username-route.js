const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User } = require('../../models');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id },
      attributes: { exclude: ['password'] },
    });
    const user = userData.get({ plain: true });

    res.render('update-username', {
      user,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;