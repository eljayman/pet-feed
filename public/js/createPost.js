async function handlePostSubmit() {
  const title = $('#post-title').val().trim();
  const description = $('#description').val().trim();

  $('#post-title').val('');
  $('#description').val('');

  if (!title || !description) {
    return alert('Please enter a title and description!');
  }

  console.log(title, description);

  const res = await fetch('/api/post/createPost', {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(res);
}

$('#create-post-form').submit(function (event) {
  event.preventDefault();
  handlePostSubmit();
});
