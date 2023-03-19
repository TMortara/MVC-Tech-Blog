const editFormHandler = async (event) => {
    // event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const postId = document.querySelector('#post-id').getAttribute('value');

    const contents = document.querySelector('#updated_contents').value;
      console.log(contents);
    // const id = window.location.toString().split('/')[
    //   window.location.toString().split('/').length - 1
    // ];
   
    const response = await fetch(`/api/comment/${id}`, {
      method: 'PUT',
      body: JSON.stringify({contents}),
      headers: { 'Content-Type': 'application/json' }
    });
       
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert(response.statusText);
    }
  }
};

console.log(document.querySelector(".edit-comment"))
document.querySelector('#edit-btn').addEventListener('click', editFormHandler);