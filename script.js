// script.js

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on click
    dropdownToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active'); //does .toggle add and remove the class?
    });

    // Close Dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target) && !dropdownContent.contains(e.target)) { // i need an explanation for this line
            dropdownToggle.classList.remove('active');
        }
    });

    // Close dropdown after clicking a link
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            dropdownToggle.classList.remove('active');
        });
    });
});