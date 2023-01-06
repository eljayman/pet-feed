const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name', 'pet_name', 'species', 'breed'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

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
