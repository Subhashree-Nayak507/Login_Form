function validateForm() {
    const form = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const rememberMe = document.getElementById('rememberMe');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('success-message');

    
    usernameError.textContent = '';
    passwordError.textContent = '';

    if (!username.value.trim()) {
        usernameError.textContent = 'Username is required.';
        return false; 
    }
    if (password.value.trim().length < 7) {
        passwordError.textContent = 'Password must be at least 7 characters long.';
        return false; 
    }
    if (rememberMe.required &&!rememberMe.checked) {
        alert('Please select the "Remember Me" checkbox.');
        return false; 
    }
    successMessage.classList.add('show');
    return true;   
}
document.getElementById('loginForm').addEventListener('Login', function(event) {
    if (!validateForm()) {
        event.preventDefault(); 
    }
    else {
        handleSuccess();
        
    }
});
function handleSuccess() {
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 5000);
}
