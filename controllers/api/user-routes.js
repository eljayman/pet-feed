const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

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

router.post('/createUser', async (req, res) => {
  console.log(req.body);
  try {
    const userData = await User.create(req.body);
    //log user in after it is created
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//route to delete user
router.delete('/:id', withAuth, (req, res) => {
  try {
    const response = User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json(response);
  } catch (error) {
    res.status(500).alert(error);
  }
});

module.exports = router;
