const router = require('express').Router();
const { Comment } = require('../../models/');

router.get('/', async (req, res) => {
  try {
    //find post by query param
    const commentData = await Post.findOne({
      where: { id: req.params.id },
      include: [
        //include and user data for the post
        {
          model: User,
          attributes: { exclude: ['password'] },
        },
        //include all comments for the post and the user data for those comments
        {
          model: Comment,
          include: { model: User, attributes: { exclude: ['password'] } },
        },
      ],
    });
    const comment = commentData.get({ plain: true });
    // render comment
    res.status(200).json(comment);
      } catch (error) {
    res.status(500).json(error);
  }
});

//post route for comments posts to post with id: req.params.id
router.post('/:id', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      //include post and user id's
      user_id: req.session.user_id,
      post_id: req.params.id,
    });
    //response
    res.status(200).json(newComment);
  } catch (err) {
    res.status(500).console.log(err);
  }
});

module.exports = router;
