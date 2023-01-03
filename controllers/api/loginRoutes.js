const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      return res.status(401).json({ message: 'Incorrect email' });
    }

    const validPassword = await userData.checkPassword(password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });

    console.log(req.session.logged_in);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
