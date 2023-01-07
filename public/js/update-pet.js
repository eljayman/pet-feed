const handlePetUpdate = (e) => {
  e.preventDefault();
  //get pet name, species and breed from input
  const pet_name = document.getElementById('update-pet-name').value.trim();
  const species = document.getElementById('update-pet-species').value.trim();
  const breed = document.getElementById('update-pet-breed').value.trim();
  if (pet_name && species && breed) {
    const response = fetch('/api/user/pet', {
      method: 'PATCH',
      body: JSON.stringify({ pet_name, species, breed }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (response.ok) {
        alert('Successfully updated pet!');
        return location.assign('/profile');
      }
    });
  } else {
    alert('Cannot have empty fields');
  }
};

document.querySelector('button').addEventListener('click', handlePetUpdate);
