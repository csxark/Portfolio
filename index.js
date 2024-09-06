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

// Contact Form
// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Collect the form data
  const serviceID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
  const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Message sent successfully!');
      modal.style.display = "none";
    }, (err) => {
      alert(JSON.stringify(err));
    });
});
// Loader 
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const astronaut = document.querySelector("[data-js='astro']");
  const boxStars = document.querySelectorAll(".box-of-star1, .box-of-star2, .box-of-star3, .box-of-star4");

  if (loader && astronaut && boxStars.length > 0) {
    loader.style.display = 'block';
    astronaut.style.animationPlayState = 'running';
    boxStars.forEach((box) => {
      box.style.animationPlayState = 'running';
    });
    // Hide the loader after 3 seconds
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease-out';
      
      // Remove the loader from the DOM after the fade-out effect
      setTimeout(() => {
        loader.style.display = 'none';
      }, 100); // 500ms for the fade-out effect to complete
    }, 2500); // 3 seconds delay
  } else {
    console.error("Loader elements not found");
  }
});