// Fetch data from API and update the count element
var apiUrl = "https://potl5cdpxi.execute-api.us-east-1.amazonaws.com/prod/product";
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Assuming the response has properties 'unique_visits' and 'total_visits'
        document.getElementById('unique_visits').innerHTML = data.unique_visits;
    })
    .catch(error => console.error('Error fetching data:', error));

// Handle menu button clicks with jQuery
$('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// Handle sidebar functionality
function showSidebar() {
    document.querySelector('.sidebar').classList.add('open');
    document.querySelector('.menu-button').style.display = 'none'; // Hide button when sidebar is open
    document.addEventListener('click', handleOutsideClick); // Add event listener for clicks outside
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
    document.querySelector('.menu-button').style.display = 'block'; // Show button when sidebar is closed
    document.removeEventListener('click', handleOutsideClick); // Remove event listener when sidebar is closed
}

function handleOutsideClick(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.querySelector('.menu-button');

    // Check if the click was outside the sidebar and the menu button
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        hideSidebar(); // Close the sidebar
    }
}

// Load the navbar HTML content dynamically
document.addEventListener('DOMContentLoaded', () => {
    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});
