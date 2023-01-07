const handleEmailUpdate = (e) => {
  e.preventDefault();
  //get pet name, species and breed from input
  const email = document.getElementById('update-email').value.trim();
  if (email) {
    const response = fetch('/api/user/email', {
      method: 'PATCH',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Email updated successfully');
        return location.assign('/profile');
      }
    });
  } else {
    alert('Cannot have empty fields');
  }
};

document.querySelector('button').addEventListener('click', handleEmailUpdate);
