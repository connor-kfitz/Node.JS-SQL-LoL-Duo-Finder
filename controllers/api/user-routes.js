const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// Post request to login a user
router.post('/login', async (req, res) => {
    try {
      // Find a user in the database that meets the request username
      const dbUserData = await User.findOne({
        where: {
          user: req.body.user,
        },
      });

      // If the user was not found then return an error
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }

      // Un-hash the password using bcrypt to make sure it matches the user's input
      const validPassword = await bcrypt.compare(
        req.body.password,
        dbUserData.password
      );

      // If the passowrd is not valid then return an error
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect username or password. Please try again!' });
        return;
      }

      // Set and save session variables for the loggedin status, game name, solo rank, and flex rank
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.name = dbUserData.gameName;
        req.session.soloRank = dbUserData.soloDuoRank;
        req.session.flexRank = dbUserData.flexRank;
        res.status(200).json({ user: dbUserData, message: 'You are now logged in!' }); 
      });
      
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

// Post request to create a user
router.post('/', async (req, res) => {
    try {
      // Create a user with all of the required info
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

      // Set and save user variables for the logged in status, game name, solo rank, and flex rank
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.name = dbUserData.gameName;
        req.session.soloRank = dbUserData.soloDuoRank;
        req.session.flexRank = dbUserData.flexRank;
        res.status(200).json(dbUserData);
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// Post request for logging a user out
router.post('/logout', (req, res) => {
  // Check to see if the user is logged in, and then destory the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// // Solo/Duo Search Routes
// Post route for ADC search
router.post('/search/adc', async (req,res) => {
  try {
    // Find all users where adc and the desired rank input are selected
    const dbUserSoloData = await User.findAll({
      where: {
        adc: '1',
        soloDuoRank: req.body.rankSelect
      },
    });

    const users = dbUserSoloData.map((user) => 
          user.get({ plain: true})    
      );
      
    // Set and save user variables for the array of selected users, length of the same array, 
    // the selected role, and que type
    req.session.save(() => {
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

// Post route for Support search
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

    req.session.save(() => {
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

// Post route for Mid search
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

    req.session.save(() => {
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

// Post route for Jungle search
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
      
    req.session.save(() => {
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

// Post route for Top search
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
      
    req.session.save(() => {
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

// // Flex Search Routes
// Post route for ADC search
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

// Post route for Support search
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
      
    req.session.save(() => {
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

// Post route for Mid search
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

    req.session.save(() => {
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

// Post route for Jungle search
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
      
    req.session.save(() => {
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

// Post route for Top search
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
      
    req.session.save(() => {
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