const postFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const contents = document.querySelector('#contents').value.trim();

    if (title && contents) {

        const resp = await fetch('/api/posts/', {
            method: 'POST', 
            body: JSON.stringify({ title, contents }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (resp.ok) {
            document.location.replace('/dashboard');

        } else {
            alert(resp.statusText);
        }
    }
};

document.querySelector('.post-form').addEventListener('submit', postFormHandler);