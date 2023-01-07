const handleUsernameUpdate = (e) => {
    e.preventDefault();
    try{
    const username = document.getElementById('update-username').value.trim();
    if (username) {
      const response = fetch('/api/user/username', {
        method: 'PATCH',
        body: JSON.stringify({ username }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          alert('Username updated successfully');
          return location.assign('/profile');
        }
      });
    } else {
      alert('Cannot have empty fields');
    }
}catch(e)
{
    console.log(e);
}
  };
  
  document.querySelector('button').addEventListener('click', handleUsernameUpdate);