const commentFormHandler = async (event) => {
    event.preventDefault();

    const contents = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (contents) {
        const resp = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({post_id, contents}),
            headers: {'Content-Type': 'application/json'}
        });

        if (resp.ok) {
            document.location.reload();
        } else {
            alert(resp.statusText);
        }
    }
};



console.log(document.querySelector(".comment-form"))
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);