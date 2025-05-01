  // Add hover effect to buttons
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Add smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
// Get the user's name from localStorage
const userName = localStorage.getItem('userName');
const userNameElement = document.getElementById('user-name');

// Check if the user is logged in
if (userName) {
// If logged in, display the user's name in the nav
userNameElement.innerHTML = `<a href="#">${userName}</a>`;
} else {
// If not logged in, show the Sign Up link
userNameElement.innerHTML = `<a href="signup.html">Sign Up</a>`;
}
});
// Simulate a login (for example purposes)
function loginUser(name) {
    // Store the user's name in localStorage
    localStorage.setItem('userName', name);
    // Reload the page to reflect changes in the navigation bar
    location.reload();
}

// Simulate a logout function (for demonstration)
function logoutUser() {
    // Remove user info from localStorage to log out
    localStorage.removeItem('userName');
    // Reload the page to reflect the changes
    location.reload();
}
//Javascript 
