const router = require('express').Router();
const sequelize = require('../config/connection')
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// GET all blog posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id', 'title', 'contents', 'date_created', 'user_id'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one blog post
router.get('/post/:id', async (req, res) => {
  try {
    // console.log(req.params.id);
    const postData = await Post.findByPk(req.params.id, {
      attributes: ['id', 'title', 'contents', 'date_created', 'user_id'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: {
            model: User
        }}
      ],
    });

    const post = postData.get({ plain: true });
    // console.log(post.comments)
    res.render('post', {
      post,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

router.get('/comment/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      attributes: ['id', 'contents', 'date_created', 'post_id', 'user_id'],
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        // {
        //   model: Comment,
        //   include: {
        //     model: User
        // }}
      ],
    });
    if (!commentData) {
      res.status(404).json({ message: 'Cannot find comment.'});
    }
    const comment = commentData.get({ plain: true });
    console.log(comment);
    res.render('edit-delete-comment', {
      comment,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Post }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       posts,
//       loggedIn: req.session.loggedIn
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

// Signup route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
