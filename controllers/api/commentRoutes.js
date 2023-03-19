const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', withAuth, async (req, res) => {
//     try {
//        const commentData = await Comment.findAll({}) 
//     //    commentData => res.json(commentData);
//     //    commentData.get({ plain: true });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });
// router.get('/', function(req, res) {
//     res.render('edit-delete-comment');
//   });


// router.get('/', withAuth, async (req, res) => {
//     try {
//        const commentData = await Comment.findAll({
//         // attirbutes: ['id', 'contents', 'date_created', 'user_id', 'post_id'],
//         // include: [
//         //   {
//         //     model: User,
//         //   },
//         // ],
//        }); 
  
//     //    const comments = commentData.map((comment) => comment.get({ plain: true }));
       
//     //    res.render('edit-delete-comment', {
//     //     comments,
//     //     loggedIn: req.session.loggedIn
//     //    });
//        res.status(200).json(commentData);
  
//     } catch (err) {
//         res.status(500).json(err);
//     }
//   });

router.post('/', withAuth, async (req, res) => {
    try {
        console.log("************************************")
        console.log("ROUTE HIT TO ADD COMMENT")
        console.log(req.body)
        const newComment = await Comment.create({
            contents: req.body.contents,
            post_id:req.body.post_id,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    console.log('************************')
    console.log('hit edit route')
    console.log(req.params.id);
    console.log(req.body);
    try {
      const commentData = await Comment.update(req.body, {
        where: {
            id: req.params.id,
        },      
      });
       console.log(commentData)
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id'});
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
      };
  });

router.delete('/:id', withAuth, async (req, res) => {
    console.log('************************')
    console.log('hit delete route')
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No post found with this ID'});
            return;
        }
            res.status(200).json(commentData);

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;