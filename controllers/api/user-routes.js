const router = require('express').Router();
const { User, Post } = require('../../models');
const { update } = require('../../models/User');
const withAuth = require('../../utils/auth');

//gets current user
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { id: req.session.user_id, attribute: { exclude: ['password'] } },
      include: Post,
      include: Comment,
    });
    //this route finds all posts and comments by a user with :id param
    const user = userData.get({ plain: true });
    return res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//this route posts a new user
router.post('/createUser', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    //log user in after it is created
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      //responds with the user-data
      return res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//api logout route
router.post('/logout', withAuth, (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      return res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//route to delete current user
router.delete('/', withAuth, (req, res) => {
  try {
    const response = User.destroy({
      where: {
        id: req.session.user_id,
      },
    });
    return res.status(204).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update pet route updates the user's pet name species and breed for current user
router.patch('/pet/', withAuth, async (req, res) => {
  try {
    const response = await User.update(
      {
        //request body takes pet_name, species and breed parameters
        pet_name: req.body.pet_name,
        species: req.body.species,
        breed: req.body.breed,
      },
      {
        where: { id: req.session.user_id },
      }
    );
    // return positive response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//updates current user's user_name
router.patch('/user_name', withAuth, async (req, res) => {
  try {
    const response = await User.update(
      {
        user_name: req.body.user_name,
        //updates user_name
      },
      {
        where: { id: req.session.id },
      }
    );
    // return positive response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//updates current user's email address
router.patch('/email', withAuth, async (req, res) => {
  try {
    const response = await User.update(
      {
        email: req.body.email,
        //updates email
      },
      {
        where: { id: req.session.id },
      }
    );
    // return positive response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

//updates current user's password
router.patch('/password', withAuth, async (req, res) => {
  try {
    const response = await User.update(
      {
        password: req.body.password,
        //updates password hooks will has before serializing
      },
      {
        where: { id: req.session.id },
      }
    );
    // return positive response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
