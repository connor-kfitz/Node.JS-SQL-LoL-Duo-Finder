const router = require('express').Router();
const { User, Role, Rank } = require('../models');

router.get('/', async (req, res) => {
      res.render('homepage', User);
  });

router.get('/search', async (req, res) => {
    res.render('searchpage');
});

router.get('/profile', async (req, res) => {
    res.render('profile');
});

module.exports = router;



