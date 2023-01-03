const router = require('express').Router();
const { User } = require('../../models');

//gets all user data
// router.get('/', async (req, res) => {
//   try {
//     const userData = await User.findAll();
//     //returns all user data
//     return res.json(userData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect credentials, please try again EMAIL' });
      return;
    }

    const validPassword = await userData.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect credentials, please try again PASSWORD' });
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'Login Successfull!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    //   req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.logged_in = true;

    res.status(200).json(userData);
    //   });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
