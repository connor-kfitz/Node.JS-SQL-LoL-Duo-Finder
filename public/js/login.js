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

    var roleCheck = false;
    if (adc || support || mid || jungle || top ) {
      roleCheck = true;
    }

    console.log(roleCheck);

    console.log(JSON.stringify({ user, password }));
    console.log(JSON.stringify({ adc, support, mid, jungle, top}));

    if (user && password && roleCheck) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ user, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      const secondresponse = await fetch('/api/users/roles', {
        method: 'Post',
        body: JSON.stringify({ adc, support, mid, jungle, top}),
        headers: { 'Content-Type': 'application/json' },
      })
    
      if (response.ok && secondresponse.ok) {
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