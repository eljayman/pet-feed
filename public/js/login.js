//example template to be configured

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Gets email and password from login page form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // This post will setup the user login information
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signUpHandler = async (event) => {
  event.preventDefault();

  const user_name = $('#username-signup').val().trim();
  const email = $('#email-signup').val().trim();
  const password = $('#password-signup').val().trim();
  const confirm = $('#password-signup-confirm').val().trim();
  const pet_name = $('#petname-signup').val().trim();
  const species = $('#petspecies-signup').val().trim();
  const breed = $('#petbreed-signup').val().trim();

  const userObj = { user_name, email, password, pet_name, species, breed };
  if (password === confirm) {
    const res = await fetch('/api/user/createUser', {
      method: 'POST',
      body: JSON.stringify(userObj),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      return location.replace('/profile');
    }
    alert(
      'Error in account creation, ensure that all fields are filled out correctly'
    );
  } else {
    alert('Passwords must match');
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signUpHandler);
