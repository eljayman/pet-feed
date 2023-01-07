const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      //gets all posts
      include: [
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
      ],
    });
    //parses the data for rendering
    const posts = postData.map((post) => post.get({ plain: true }));
    //renders homepage with the posts
    res.render('home', {
      posts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//link from homepage sends fetch request to api/user/logout
router.get('/logout', withAuth, async (req, res) => {
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  //handle the response
  if (response.ok) {
    location.replace('/login');
    res.end();
  } else {
    res.end();
  }
});

module.exports = router;
