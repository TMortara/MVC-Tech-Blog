const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//GET all posts from logged in user
router.get('/', withAuth, async (req, res) => {
    try {
        console.log("************************************")
        console.log("DASHBOARD ROUTE HIT")
        const postData = await Post.findAll({
        where: { user_id: req.session.user_id },
        attributes: ['id', 'title', 'contents', 'date_created'],
        order: [['date_created', 'DESC']],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
       });
       
       const posts = postData.map((post) => 
        post.get({ plain: true })
        );
        console.log(posts)

        res.render('dashboard', {posts, loggedIn: true});
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//GET one post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });

        res.render('post', { post });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// //GET post to edit
// router.get('/edit/:id', withAuth, async (req, res) => {
//     console.log("************************************")
//     console.log("ROUTE HIT TO EDIT POST")
//     try {
//         const postData = await Post.findByPk(req.params.id, {
//             attributes: ['id', 'title', 'contents', 'date_created'],
//             include: [
//                 {
//                   model: User,
//                   attributes: ['username'],
//                 },
//                 {
//                   model: Comment,
//                   include: {
//                     model: User
//                 }}
//               ],
//         });

//         if (!postData) {
//             res.status(404).json({ message: 'Cannot find post' });
//         }

//         const post = postData.get({ plain: true });
//         res.render('edit-post', {
//             post, 
//             loggedIn: req.session.loggedIn
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/post/create', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {user_id: req.session.user_id},
            attributes: ['id', 'title', 'contents', 'date_created'],
        });

        const post = postData.map((post) =>
        trip.get({ plain: true })
        );

        res.render('create-post', {post, loggedIn: true});

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

