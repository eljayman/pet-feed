const router = require('express').Router();
const { Post, User } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/:id', async (req,res) => {
  try{
    console.log("profile page route");
    const userData = await User.findByPk(req.params.id);
    const plainData = userData.get({ plain: true });

    const postData = await Post.findAll({
      where: { user_id: req.params.id },
    });
    const plainPost = postData.map(post => post.get({plain: true}));
    
    const loggedIn = { loggedIn: req.session.logged_in}
    res.render('profilePage', 
    { 
      plainData, 
      plainPost, 
      loggedIn
  });
  } catch (err) {
    console.log("error in profile")
    res.status(500).json(err);
  }
});

module.exports = router;