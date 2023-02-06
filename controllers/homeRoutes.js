const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");
const withAuth = require("../utils/auth");

// GET all blog posts
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Post,
          attributes: ["title", "contents", "date_created", "user_id"],
          order: [["date_created"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      //DO I NEED SESSION FLAG...SEE HOMEROUTES MINI PROJECT
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Post,
          attributes: ["title", "contents", "date_created", "user_id"],
          order: [["date_created"]],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      //DO I NEED SESSION FLAG...SEE HOMEROUTES MINI PROJECT
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      posts,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

module.exports = router;
