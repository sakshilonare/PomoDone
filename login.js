// get a reference to the login form and its input fields
const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const passwordInput = document.querySelector('input[name="pswrd"]');

// add an event listener to the form submission
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the default form submission
    
    // get the values of the input fields
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    
    // validate the input
    if (username === '') {
        alert('Please enter your username');
        return;
    }
    
    if (password === '') {
        alert('Please enter your password');
        return;
    }
    
    // submit the form if input is valid
    loginForm.submit();
});