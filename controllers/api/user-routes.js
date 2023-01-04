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

router.post('/createUser', async (req, res) => {
  console.log(req.body);

  try {
    const userData = await User.create(req.body);
    console.log({ userData });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
