const router = require('express').Router();
const { Post } = require('../../models/');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll();
    return res.json(postData);
  } catch (err) {
    res.status(500).console.log(err);
  }
});

router.post('/createPost', (req, res) => {
  try {
    const user_id = req.session.user_id;
    const { title, description } = req.body;

    const postObj = {
      title,
      description,
      user_id,
    };

    const postRes = Post.create(postObj);

    if (postRes) return res.status(200).json({ message: 'Post created!' });
    return res.status(400).json({ message: 'Error in post creation' });
  } catch (error) {
    res.status(500).json({ message: 'Error in post creation' });
  }
});

module.exports = router;
