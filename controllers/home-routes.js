const router = require('express').Router();
const { User, Role, Rank } = require('../models');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();

        const users = userData.map((user) => 
            user.get({ plain: true})    
        );

        res.render('homepage', {
            users,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });

router.get('/search', async (req, res) => {
    res.render('searchpage');
});

router.get('/profile', async (req, res) => {
    res.render('profile');
});

module.exports = router;



