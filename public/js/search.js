const playerSearchButton = document.querySelector('#playerSearchButton');
const flexPlayerSearchButton = document.querySelector('#flexPlayerSearchButton');

// Function to get and display solo/duo search results based on user input
const searchButtonHandler = async (event) => {
    event.preventDefault();
  
    const roleSelect = document.querySelector('#roles').value;
    const rankSelect = document.querySelector('#ranks').value;

    // Solo/duo calls based on the selected role
    if(roleSelect == 'adc') {
      const response = await fetch('/api/users/search/adc', {
        method: 'POST',
        body: JSON.stringify({ rankSelect }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert('Failed to log in.');
      }
    } 
    
    else if(roleSelect =='support') {
      const response = await fetch('/api/users/search/support', {
        method: 'POST',
        body: JSON.stringify({ rankSelect }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert('Failed to log in.');
      }
    }

    else if(roleSelect =='mid') {
      const response = await fetch('/api/users/search/mid', {
        method: 'POST',
        body: JSON.stringify({ rankSelect }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert('Failed to log in.');
      }
    }

    else if(roleSelect =='jungle') {
      const response = await fetch('/api/users/search/jungle', {
        method: 'POST',
        body: JSON.stringify({ rankSelect }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert('Failed to log in.');
      }
    }

    else if(roleSelect =='top') {
      const response = await fetch('/api/users/search/top', {
        method: 'POST',
        body: JSON.stringify({ rankSelect }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/search');
      } else {
        alert('Failed to log in.');
      }
    }
  };

// Function to get and display flex search results based on user input
const flexSearchButtonHandler = async (event) => {
  event.preventDefault();

  const roleSelect = document.querySelector('#flexRoles').value;
  const rankSelect = document.querySelector('#flexRanks').value;

  if(roleSelect == 'adc') {
    const response = await fetch('/api/users/search/adc/flex', {
      method: 'POST',
      body: JSON.stringify({ rankSelect }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to log in.');
    }
  } 
  
  else if(roleSelect =='support') {
    const response = await fetch('/api/users/search/support/flex', {
      method: 'POST',
      body: JSON.stringify({ rankSelect }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to log in.');
    }
  }

  else if(roleSelect =='mid') {
    const response = await fetch('/api/users/search/mid/flex', {
      method: 'POST',
      body: JSON.stringify({ rankSelect }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to log in.');
    }
  }

  else if(roleSelect =='jungle') {
    const response = await fetch('/api/users/search/jungle/flex', {
      method: 'POST',
      body: JSON.stringify({ rankSelect }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to log in.');
    }
  }
  else if(roleSelect =='top') {
    const response = await fetch('/api/users/search/top/flex', {
      method: 'POST',
      body: JSON.stringify({ rankSelect }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/search');
    } else {
      alert('Failed to log in.');
    }
  }
};

// Event listeners for the submit buttons
playerSearchButton.addEventListener('click', searchButtonHandler);
flexPlayerSearchButton.addEventListener('click', flexSearchButtonHandler);