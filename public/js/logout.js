//sends the logout request to the user api

const handleLogout = async () => {
  // Post request to log out of site
  const response = await fetch('/api/user/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //if log out was successful changes view to log in or errors to logout failed
    location.replace('/login');
  } else {
    alert('Logout Failed');
  }
};

document.querySelector('#nav-logout').addEventListener('click', handleLogout);
