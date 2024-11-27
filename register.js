// JavaScript to validate that password and confirm password match
function validatePassword() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

// Event listener to check password match as user types
document.getElementById('confirmPassword').addEventListener('input', function() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var confirmPasswordField = document.getElementById('confirmPassword');
    var passwordMatchStatus = document.getElementById('passwordMatchStatus');

    if (password === confirmPassword) {
        // Passwords match: green border and "Match" status
        confirmPasswordField.style.borderColor = 'green';
        passwordMatchStatus.textContent = 'Passwords match';
        passwordMatchStatus.style.color = 'green';
    } else {
        // Passwords do not match: red border and "Mismatch" status
        confirmPasswordField.style.borderColor = 'red';
        passwordMatchStatus.textContent = 'Passwords do not match';
        passwordMatchStatus.style.color = 'red';
    }
});
