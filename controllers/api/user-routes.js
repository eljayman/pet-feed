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

router.get("/",async(req,res) => {
  const user = {
    pet_name: "petty",
    species: "beta species 0.3",
    breed: "out"
  }
  const post = {
    posts: [
    {
      title: "beta species 0.3 test post"
    },

  ]
  }

  res.render("profilePage",{user, post})
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
