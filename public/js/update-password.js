const handlePasswordUpdate = (e) => {
  e.preventDefault();
  //get pet name, species and breed from input
  const password = document.getElementById('update-password').value.trim();
  const passwordConfirm = document
    .getElementById('update-password-confirm')
    .value.trim();

  if (password === passwordConfirm && password) {
    const response = fetch('/api/user/password', {
      method: 'PATCH',
      body: JSON.stringify({ password }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Password updated successfully');
        return location.assign('/profile');
      }
    });
  } else {
    alert('Please fill out both fields and make sure the passwords match');
  }
};

document
  .querySelector('#update-password-btn')
  .addEventListener('click', handlePasswordUpdate);
