const playerSearchButton = document.querySelector('#playerSearchButton');

const searchButtonHandler = async (event) => {
    event.preventDefault();
  
    const roleSelect = document.querySelector('#roles').value;
    const rankSelect = document.querySelector('#ranks').value;
  
    console.log(roleSelect);
    console.log(rankSelect);

    if (roleSelect && rankSelect) {
      const response = await fetch('/api/users/search', {
        method: 'GET',
        body: JSON.stringify({ roleSelect }),
        headers: { 'Content-Type': 'application/json' },
      });
  
    //   if (response.ok) {
    //     document.location.replace('/');
    //   } else {
    //     alert('Failed to log in.');
    //   }
    }
  };

playerSearchButton.addEventListener('click', searchButtonHandler)