const deletePostFormHandler = async (event) => {
    // event.preventDefault();
    // const postId = document.querySelector('#post-id').getAttribute('value');
    
    console.log('hello');
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method:'DELETE'
        });

        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Post could not be deleted at this time.  Please try again later.');
        }
    }
};

// console.log(document.querySelector(".delete-comment"))
document.querySelector('#delete-post-btn').addEventListener('click', deletePostFormHandler);