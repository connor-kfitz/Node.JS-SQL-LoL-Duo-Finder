const router = require('express').Router();
const { User } = require('../models');

// Display Homepage on views/layouts/main.handlebars
router.get('/', async (req, res) => {
    try{
        // Find all users data
        const userData = await User.findAll();

        // Serialize data
        const users = userData.map((user) => 
            user.get({ plain: true})    
        );

        // Renders the body as homepage with the users data and logged in status
        res.render('homepage', {
            users,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Displays Profilepage on views/layouts/main.handlebars
router.get('/profile', async (req, res) => {
    // res.render('profile');
    try{
        // Renders the body with the logged in status, and logged in player name, solo rank, and flex rank
        res.render('profilepage', {
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

// Displays Searchpage on views/layouts/main.handlebars
router.get('/search', async (req, res) => {
    try{
        // Renders the body as searchpage with the users data, logged in status, length of players in selected array
        // the selected role, and the que type
        res.render('searchpage', {
            // users,
            loggedIn: req.session.loggedIn,
            usersInfo: req.session.usersInfo,
            usersLength: req.session.usersLength,
            roleSelect: req.session.roleSelect,
            queType: req.session.queType,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Displays the Loginpage
router.get('/login', async (req, res) => {
    res.render('loginpage');
});

module.exports = router;