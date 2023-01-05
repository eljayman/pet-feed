async function handlePostSubmit() {
  const $postButton = $('#post-submit');
  $postButton.text('Loading, Please Wait...');
  const title = $('#post-title').val().trim();
  const description = $('#description').val().trim();

  $('#post-title').val('');
  $('#description').val('');

  if (!title || !description) {
    $postButton.text('Post');
    return alert('Please enter a title and description!');
  }

  const form = document.getElementById('create-post-form');
  const formData = new FormData(form);
  formData.append('title', title);
  formData.append('description', description);

  const res = await fetch('/api/post/createPost', {
    method: 'POST',
    body: formData,
  });

  if (res.ok) {
    $postButton.text('Success!');
    alert('Post Created Successfully!');
    return window.location.replace('/');
  }

  $postButton.text('Post');
  alert('Error in post creation, please try again later');
}

$('#create-post-form').submit(function (event) {
  event.preventDefault();
  handlePostSubmit();
});
