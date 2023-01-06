const handlePasswordUpdate = (e) => {
  e.preventDefault();
  //get pet name, species and breed from input
  const password = document.getElementById('update-password').value.trim();
  const passwordConfirm = document
    .getElementById('update-password-confirm')
    .value.trim();
  if (password === passwordConfirm) {
    const response = fetch('/api/user/password', {
      method: 'PATCH',
      body: JSON.stringify({ password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        return location.assign('/profile');
      }
    });
  } else {
    alert('Passwords do not match');
  }
};

document
  .querySelector('button')
  .addEventListener('click', handlePasswordUpdate);
