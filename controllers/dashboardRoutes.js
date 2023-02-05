const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
       const userData = await User.findAll({
       }) 
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;