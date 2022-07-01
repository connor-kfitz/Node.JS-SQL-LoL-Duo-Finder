const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Role, Ranked } = require('../../models');

router.post('/login', async (req, res) => {
    
    console.log(req.body.user);
    console.log(req.body.password);

    try {
      const dbUserData = await User.findOne({
        where: {
          user: req.body.user,
        },
      });

      console.log()
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
      
      console.log(dbUserData.user);
      console.log(dbUserData.password);

      const validPassword = await bcrypt.compare(
        req.body.password,
        dbUserData.password
      );
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }
  
      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;

        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    console.log(req.body.user);
    try {
      const dbUserData = await User.create({
        user: req.body.user,
        password: await bcrypt.hash(req.body.password, 10),
        gameName: req.body.gameName,
      });
        req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/roles', async (req, res) => {
    try {
      const dbUserData = await Role.create({
        adc: req.body.adc,
        support: req.body.support,
        mid: req.body.mid,
        jungle: req.body.jungle,
        top: req.body.top

      });
        req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.post('/rank', async (req, res) => {
    try {
      const dbUserData = await Ranked.create({
        soloDuoRank: req.body.soloDuoRank,
        flexRank: req.body.flexRank
      });
        req.session.save(() => {
        req.session.loggedIn = true;
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });



  router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
