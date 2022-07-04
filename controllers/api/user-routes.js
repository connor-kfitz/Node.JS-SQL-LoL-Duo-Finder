const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Role, Ranked } = require('../../models');

router.post('/login', async (req, res) => {

    try {
      const dbUserData = await User.findOne({
        where: {
          user: req.body.user,
        },
      });

      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }

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

      var currentName = dbUserData.gameName;
      var currentSoloRank = dbUserData.soloDuoRank;
      var currentFlexRank = dbUserData.flexRank;

      // Once the user successfully logs in, set up the sessions variable 'loggedIn'
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.name = currentName;
        req.session.soloRank = currentSoloRank;
        req.session.flexRank = currentFlexRank;
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
        adc: req.body.adc,
        support: req.body.support,
        mid: req.body.mid,
        jungle: req.body.jungle,
        top: req.body.top,
        soloDuoRank: req.body.soloDuoRank,
        flexRank: req.body.flexRank,
        gameName: req.body.gameName,
      });

      var currentSoloRank = dbUserData.soloDuoRank;
      var currentFlexRank = dbUserData.flexRank;

      var currentName = dbUserData.gameName;

        req.session.save(() => {
        req.session.loggedIn = true;
        req.session.name = currentName;
        req.session.soloRank = currentSoloRank;
        req.session.flexRank = currentFlexRank;
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

// Solo/Duo Search Routes

router.post('/search/adc', async (req,res) => {
  try {
    const dbUserSoloData = await User.findAll({
      where: {
        adc: '1',
        soloDuoRank: req.body.rankSelect
      },
    });

    const users = dbUserSoloData.map((user) => 
          user.get({ plain: true})    
      );
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'ADC';
      req.session.queType = 'Solo/Duo';

      res.status(200).json(dbUserSoloData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/support', async (req,res) => {
  try {
    const dbUserSoloData = await User.findAll({
      where: {
        support: '1',
        soloDuoRank: req.body.rankSelect
      },
    });

    const users = dbUserSoloData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Support';
      req.session.queType = 'Solo/Duo';

      res.status(200).json(dbUserSoloData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/mid', async (req,res) => {
  try {
    const dbUserSoloData = await User.findAll({
      where: {
        mid: '1',
        soloDuoRank: req.body.rankSelect
      },
    });

    const users = dbUserSoloData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Mid';
      req.session.queType = 'Solo/Duo';

      res.status(200).json(dbUserSoloData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/jungle', async (req,res) => {
  try {
    const dbUserSoloData = await User.findAll({
      where: {
        jungle: '1',
        soloDuoRank: req.body.rankSelect
      },
    });

    const users = dbUserSoloData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Jungle';
      req.session.queType = 'Solo/Duo';

      res.status(200).json(dbUserSoloData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/top', async (req,res) => {
  try {
    const dbUserSoloData = await User.findAll({
      where: {
        top: '1',
        soloDuoRank: req.body.rankSelect
      },
    });

    const users = dbUserSoloData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Top';
      req.session.queType = 'Solo/Duo';

      res.status(200).json(dbUserSoloData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Flex Search Routes

router.post('/search/adc/flex', async (req,res) => {
    try {
      const dbUserFlexData = await User.findAll({
        where: {
          adc: '1',
          flexRank: req.body.rankSelect
        },
      });

      const users = dbUserFlexData.map((user) => 
            user.get({ plain: true})    
        );
        
        req.session.save(() => {
        req.session.loggedIn = true;
        req.session.usersInfo = users;
        req.session.usersLength = users.length;
        req.session.roleSelect = 'ADC';
        req.session.queType = 'Flex';

        res.status(200).json(dbUserFlexData);
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.post('/search/support/flex', async (req,res) => {
  try {
    const dbUserFlexData = await User.findAll({
      where: {
        support: '1',
        flexRank: req.body.rankSelect
      },
    });

    const users = dbUserFlexData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Support';
      req.session.queType = 'Flex';

      res.status(200).json(dbUserFlexData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/mid/flex', async (req,res) => {
  try {
    const dbUserFlexData = await User.findAll({
      where: {
        mid: '1',
        flexRank: req.body.rankSelect
      },
    });

    const users = dbUserFlexData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Mid';
      req.session.queType = 'Flex';

      res.status(200).json(dbUserFlexData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/jungle/flex', async (req,res) => {
  try {
    const dbUserFlexData = await User.findAll({
      where: {
        jungle: '1',
        flexRank: req.body.rankSelect
      },
    });

    const users = dbUserFlexData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Jungle';
      req.session.queType = 'Flex';

      res.status(200).json(dbUserFlexData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/search/top/flex', async (req,res) => {
  try {
    const dbUserFlexData = await User.findAll({
      where: {
        top: '1',
        flexRank: req.body.rankSelect
      },
    });

    const users = dbUserFlexData.map((user) => 
          user.get({ plain: true})    
      );

      console.log(users);
      
      req.session.save(() => {
      req.session.loggedIn = true;
      req.session.usersInfo = users;
      req.session.usersLength = users.length;
      req.session.roleSelect = 'Top';
      req.session.queType = 'Flex';

      res.status(200).json(dbUserFlexData);
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;