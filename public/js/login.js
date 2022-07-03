const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const user = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (user && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  const signupFormHandler = async (event) => {
    event.preventDefault();
  
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

    var roleCheck = false;
    if (adc || support || mid || jungle || top ) {
      roleCheck = true;
    }

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

    if (user && password && gameName && roleCheck && rankCheck && rankFlexCheck) {
      console.log(adc);
      console.log(support);
      console.log(mid);
      console.log(jungle);
      console.log(top);
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user, password, adc, support, mid, jungle, top, soloDuoRank, flexRank, gameName }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

    // if (user && password && gameName && roleCheck && rankCheck && rankFlexCheck) {
    //   const response = await fetch('/api/users', {
    //     method: 'POST',
    //     body: JSON.stringify({ user, password, gameName }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });

    //   const secondresponse = await fetch('/api/users/roles', {
    //     method: 'Post',
    //     body: JSON.stringify({ adc, support, mid, jungle, top}),
    //     headers: { 'Content-Type': 'application/json' },
    //   })

    //   const thirdresponse = await fetch('/api/users/rank', {
    //     method: 'Post',
    //     body: JSON.stringify({ soloDuoRank , flexRank }),
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    
    //   if (response.ok && secondresponse.ok && thirdresponse.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to sign up.');
    //   }
    // }