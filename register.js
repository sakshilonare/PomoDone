// Wait for the DOM to load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {

    // Get the registration form element
    var registrationForm = document.querySelector('form');
  
    // Attach an event listener to the form's submit event
    registrationForm.addEventListener('submit', function(event) {
  
      // Prevent the form from submitting
      event.preventDefault();
  
      // Get the form input values
      var username = document.getElementById('username').value.trim();
      var email = document.getElementById('email').value.trim();
      var password = document.getElementById('pwd').value.trim();
      var passwordRepeat = document.getElementById('pwd-repeat').value.trim();
  
      // Check if the username is empty
      if (username === '') {
        alert('Please enter a username');
        return false;
      }
  
      // Check if the email is empty or does not match the regular expression for email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === '' || !emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }
  
      // Check if the password is empty or has less than 8 characters
      if (password === '' || password.length < 8) {
        alert('Please enter a password that has at least 8 characters');
        return false;
      }
  
      // Check if the password and password repeat fields match
      if (password !== passwordRepeat) {
        alert('The password and password repeat fields do not match');
        return false;
      }
  
      // If all validations pass, submit the form
      registrationForm.submit();
    });
  });