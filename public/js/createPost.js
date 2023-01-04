async function handlePostSubmit() {
  // const title = $('#post-title').val().trim();
  // const description = $('#description').val().trim();

  // $('#post-title').val('');
  // $('#description').val('');

  // if (!title || !description) {
  //   return alert('Please enter a title and description!');
  // }

  const form = document.getElementById('create-post-form');
  const formData = new FormData(form);
  console.log(form, formData);

  const res = await fetch('/api/post/createPost', {
    method: 'POST',
    body: formData,
  });

  if (res.ok) {
    alert('Post Created Successfully!');
    return window.location.replace('/');
  }

  alert('Error in post creation, please try again later');
}

$('#create-post-form').submit(function (event) {
  event.preventDefault();
  handlePostSubmit();
});
