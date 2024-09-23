// Get the email input field, error message element, and icon element from the DOM
let emailId = document.getElementById("email-id");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

// Function to check the validity of the entered email address
function checker() {
    // Display the icon initially
    icon.style.display = "inline-block";
    // Trim whitespace from the email input value
    let email = emailId.value.trim();

    // Check if the email input is empty
    if (email == "") {
        // Hide the icon and error message if the input is empty
        icon.style.display = "none";
        errorMsg.style.display = "none";
        emailId.style.border = "2px solid #d1d3d4"; // Set border color to gray
    } else if (validateEmail(email)) { // If the email is valid
        // Show a check mark icon and set border color to green
        icon.innerHTML = '<i class="fas fa-check-circle"></i>';
        icon.style.color = "#2ecc71";
        errorMsg.style.display = "none"; // Hide error message
        emailId.style.border = "2px solid #2ecc71"; // Set border color to green
    } else { // If the email is invalid
        // Show an error icon and set border color to red
        icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
        icon.style.color = "#ff2851";
        errorMsg.style.display = "block"; // Show error message
        emailId.style.border = "2px solid #ff2851"; // Set border color to red
    }
}

// Function to validate the email format
function validateEmail(email) {
    let atIndex = email.indexOf("@"); // Find the index of '@'
    let dotIndex = email.lastIndexOf("."); // Find the index of the last '.'

    // Check if '@' and '.' are in valid positions
    if (
        atIndex > 0 && // '@' should not be the first character
        dotIndex > atIndex + 1 && // '.' should be after '@' and at least one character should be between
        dotIndex < email.length - 2 // '.' should not be the last or second last character
    ) {
        return true; // Email format is valid
    } else {
        return false; // Email format is invalid
    }
}