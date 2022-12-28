//example template to be configured

const logout = async () => {
    // Post request to log out of site 
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      //if log out was successful changes view to log in or errors to logout failed
      document.location.replace('/login');
    } else {
      alert('Logout failed');
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);