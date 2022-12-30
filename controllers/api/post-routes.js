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

module.exports = router;
