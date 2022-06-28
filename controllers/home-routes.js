const router = require('express').Router();
const { User, Role, Rank } = require('../models');

router.get('/', async (req, res) => {
      res.render('homepage');
  });