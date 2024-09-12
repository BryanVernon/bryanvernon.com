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
