// Function to export login form information
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Connect username and password boxes to login.js
    const user = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    // Confirm a username and password were entered 
    if (user && password) {
      // Make post request to login the user
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      // Take user back to homepage
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

// Function to export signup form information
const signupFormHandler = async (event) => {
    event.preventDefault();

    // Connect required inputs to login.js
    const user = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    const adc = document.querySelector('#adcRole-signup').checked;
    const support = document.querySelector('#supportRole-signup').checked;
    const mid = document.querySelector('#midRole-signup').checked;
    const jungle = document.querySelector('#jungleRole-signup').checked;
    const top = document.querySelector('#topRole-signup').checked;

    const iron = document.querySelector('#iron-signup').checked;
    const bronze = document.querySelector('#bronze-signup').checked;
    const silver = document.querySelector('#silver-signup').checked;
    const gold = document.querySelector('#gold-signup').checked;
    const platinum = document.querySelector('#platinum-signup').checked;
    const diamond = document.querySelector('#diamond-signup').checked;

    const ironFlex = document.querySelector('#ironFlex-signup').checked;
    const bronzeFlex = document.querySelector('#bronzeFlex-signup').checked;
    const silverFlex = document.querySelector('#silverFlex-signup').checked;
    const goldFlex = document.querySelector('#goldFlex-signup').checked;
    const platinumFlex = document.querySelector('#platinumFlex-signup').checked;
    const diamondFlex = document.querySelector('#diamondFlex-signup').checked;

    const gameName = document.querySelector('#gameName-signup').value.trim();

    // If statment to verify at least one role was selected
    var roleCheck = false;
    if (adc || support || mid || jungle || top ) {
      roleCheck = true;
    }

    // Check to make sure one solo/duo rank was selected, and set it to the input
    var rankCheck = false;
    var soloDuoRank = "";
    if(iron == true){
      soloDuoRank = 'Iron';
      rankCheck = true;
    } else if(bronze == true) {
      soloDuoRank = 'Bronze';
      rankCheck = true;
    } else if(silver == true) {
      soloDuoRank = 'Silver';
      rankCheck = true;
    } else if(gold == true) {
      soloDuoRank = 'Gold';
      rankCheck = true;
    } else if(platinum == true) {
      soloDuoRank = 'Platinum';
      rankCheck = true;
    } else if(diamond == true) {
      soloDuoRank = 'Diamond';
      rankCheck = true;
    }

    // Check to make sure one flex rank was selected, and set it to the input
    var rankFlexCheck = false;
    var flexRank = "";
    if(ironFlex == true){
      flexRank = 'Iron';
      rankFlexCheck = true;
    } else if(bronzeFlex == true) {
      flexRank = 'Bronze';
      rankFlexCheck = true;
    } else if(silverFlex == true) {
      flexRank = 'Silver';
      rankFlexCheck = true;
    } else if(goldFlex == true) {
      flexRank = 'Gold';
      rankFlexCheck = true;
    } else if(platinumFlex == true) {
      flexRank = 'Platinum';
      rankFlexCheck = true;
    } else if(diamondFlex == true) {
      flexRank = 'Diamond';
      rankFlexCheck = true;
    }

    // Make sure all sign up inputs are present
    if (user && password && gameName && roleCheck && rankCheck && rankFlexCheck) {
      // Request to create a new user with the inputs
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user, password, adc, support, mid, jungle, top, soloDuoRank, flexRank, gameName }),
        headers: { 'Content-Type': 'application/json' },
      });

      // Takes user back to homepage
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
};

// Login and signup submit buttons
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);