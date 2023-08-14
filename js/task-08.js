const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('All fields must be filled!')
    } 
    
    const userData = {
        email: email.value,
        password: password.value
    };

    console.log(userData);
    loginForm.reset();
}
