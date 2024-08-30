// Navbar

// Toggle menu visibility and close menu when clicking outside of it
document.addEventListener('click', function (event) {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');

  if (menuToggle.contains(event.target)) {
    nav.classList.toggle('active');
  } else if (!nav.contains(event.target) && nav.classList.contains('active')) {
    nav.classList.remove('active');
  }
});

// Close the menu when a menu item is clicked
document.querySelectorAll('nav > a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('nav').classList.remove('active');
  });
});

