const deleteFormHandler = async (event) => {
    // event.preventDefault();
    const postId = document.querySelector('#post-id').getAttribute('value');
    
    console.log('hello');
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/comment/${id}`, {
            method:'DELETE'
        });

        if (response.ok) {
            document.location.replace(`/post/${postId}`);
        } else {
            alert('Comment could not be deleted at this time.  Please try again later.');
        }
    }
};

// console.log(document.querySelector(".delete-comment"))
document.querySelector('#delete-btn').addEventListener('click', deleteFormHandler);