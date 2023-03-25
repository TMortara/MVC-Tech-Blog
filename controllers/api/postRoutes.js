const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//POST route to create new post
router.post('/', withAuth, async (req, res) => {
    try {
        console.log("*******************")
        console.log(req.body)
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newPost);

    } catch (err) {
        res.status(500).json(err);
    }
});

//PUT route to update post
router.put('/:id', withAuth, async (req, res) => {
    console.log("************************************")
        console.log("POST PUT ROUTE HIT")
    try {
        const post = await Post.update(req.body,
            // {
            //     title: req.body.title,
            //     contents: req.body.contents,
            //     date_created: req.body.date_created,
            // },
            {
                where: {
                    id: req.params.id
,                },
            }
        );
        
        if (!post) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }

        res.status(200).json(post);
        // res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE route to delete selected post
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;