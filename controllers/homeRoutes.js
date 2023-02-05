const router = require('express').Router();
const { User, Post } = require('../models');

// GET all blog posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: Post,
                    attributes: [
                        'title', 
                        'contents', 
                        'date_created',
                        'user_id',
                    ],
                    order: [['date_created']],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            //DO I NEED SESSION FLAG...SEE HOMEROUTES MINI PROJECT
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Post,
                    attributes: [
                        'title', 
                        'contents', 
                        'date_created',
                        'user_id',
                    ],
                    order: [['date_created']],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            //DO I NEED SESSION FLAG...SEE HOMEROUTES MINI PROJECT
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;