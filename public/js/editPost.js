const editPostFormHandler = async (event) => {
    // event.preventDefault();

    // if (event.target.hasAttribute('data-id')) {
    // const id = event.target.getAttribute('data-id');
    const postId = document.querySelector('#post-id').getAttribute('value');

    const title = document.querySelector('#updated-title').value.trim();
    const contents = document.querySelector('#updated-contents').value.trim();
    console.log(contents);
    // const contents = document.querySelector('#updated_contents').value;
    //   console.log(contents);
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
   
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, contents }),
      headers: { 'Content-Type': 'application/json' }
    });
       
    if (response.ok) {
      document.location.replace(`/post/${postId}`);
    } else {
      alert(response.statusText);
    }
//   }
};

// console.log(document.querySelector(".edit-comment"))
document.querySelector('#edit-post-btn').addEventListener('click', editPostFormHandler);