const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email.login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {

        const resp = await fetch ('/api/users/login', {
            method: 'POST', 
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (resp.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(resp.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const resp = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, password }), 
            headers: { 'Content-Type': 'application/json' },
        });

        if (resp.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(resp.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);