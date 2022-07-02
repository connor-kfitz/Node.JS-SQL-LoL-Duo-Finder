const router = require('express').Router();
const { User, Role, Ranked } = require('../models');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll();

        const users = userData.map((user) => 
            user.get({ plain: true})    
        );

        const rankData = await Ranked.findAll();

        const ranks = rankData.map((rank) => 
            rank.get({ plain: true})    
        );

        res.render('homepage', {
            users,
            ranks,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  });

router.get('/search', async (req, res) => {
    // res.render('searchpage');
    try{
        const userData = await User.findAll();

        const users = userData.map((user) => 
            user.get({ plain: true})    
        );

        res.render('searchpage', {
            users,
            loggedIn: req.session.loggedIn
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/profile', async (req, res) => {
    // res.render('profile');
    try{
        const userData = await User.findAll();

        const users = userData.map((user) => 
            user.get({ plain: true})    
        );

        res.render('profilepage', {
            users,
            loggedIn: req.session.loggedIn,
            name: req.session.name,
            soloRank: req.session.soloRank,
            flexRank: req.session.flexRank,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    res.render('loginpage');
});

module.exports = router;