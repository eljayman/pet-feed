const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['pet_name', 'species', 'breed'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('home', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
