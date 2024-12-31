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
    }, 2500); // 2.5 seconds delay
  } else {
    console.error("Loader elements not found");
  }
});

// Projects
const projects = [
    { title: 'Project 1', description: 'A brief description of project 1', codeLink: 'https://github.com/username/project1', demoLink: 'https://youtube.com/watch?v=demo1', image: 'images/project1.jpg' },
    { title: 'Project 2', description: 'A brief description of project 2', codeLink: 'https://github.com/username/project2', demoLink: 'https://youtube.com/watch?v=demo2', image: 'images/project2.jpg' },
    // Add more projects as needed
];

function createProjectElement(project) {
    const projectElement = document.createElement('div');
    projectElement.className = 'project-item';
    projectElement.innerHTML = `
        <div class="project-image" style="background-image: url('${project.image}')"></div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
            <a href="${project.codeLink}" target="_blank" rel="noopener noreferrer" class="btn-hover">View Code</a>
            <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="btn-hover">Watch Demo</a>
        </div>
    `;
    return projectElement;
}

function renderProjects() {
    const projectGrid = document.querySelector('.project-grid');
    projects.forEach((project) => {
        projectGrid.appendChild(createProjectElement(project));
    });
}

// Call the function to render projects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderProjects);

function openImageModal(imgElement) {
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
    
  modalImage.src = imgElement.src;
  modalTitle.textContent = imgElement.dataset.title;
  modalDescription.textContent = imgElement.dataset.description;
    
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel with infinite loop
  new bootstrap.Carousel(document.getElementById('imageCarousel'), {
      interval: 3000,
      wrap: true,
      touch: true
  });
});