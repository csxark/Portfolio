// Navbar
// Toggle menu visibility and close menu when clicking outside of it
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  const navLinks = document.querySelectorAll('nav a');

  menuToggle?.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', nav.classList.contains('active'));
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth scroll behavior
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = document.querySelector('#navbar').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active section highlighting
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNavOnScroll() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`nav a[href="#${sectionId}"]`);

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        correspondingLink?.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll);
  highlightNavOnScroll();

  // Hide mobile menu on resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 995 && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Modal handling
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById("contactModal");
  const btn = document.getElementById("contactBtn");
  const span = document.getElementsByClassName("close")[0];
  
  btn.onclick = function() {
    modal.style.display = "block";
    modal.classList.add('show');
    // Reset form and status when opening modal
    document.getElementById('contact-form').reset();
    document.getElementById('form-status').textContent = '';
  }
  
  span.onclick = function() {
    modal.style.display = "none";
    modal.classList.remove('show');
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modal.classList.remove('show');
    }
  }

  // Form handling
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit');
    const formStatus = document.getElementById('form-status');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    formStatus.textContent = '';
    
    emailjs.sendForm('service_4e5pu8a', 'template_37pbdwk', this)
      .then(function() {
        formStatus.textContent = 'Message sent successfully!';
        formStatus.style.color = '#00ff00';
        form.reset();
        setTimeout(() => {
          modal.style.display = "none";
          modal.classList.remove('show');
        }, 2000);
      })
      .catch(function(error) {
        formStatus.textContent = 'Failed to send message. Please try again.';
        formStatus.style.color = '#ff0000';
        console.error('Error:', error);
      })
      .finally(function() {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send';
      });
  });
});
  
// Enhanced Loader with Progress Indicator
document.addEventListener("DOMContentLoaded", function() {
  // Start with opacity 0 and fade in
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = '0';
    loader.style.display = 'flex';
    loader.style.transition = 'opacity 0.5s ease-in';
    
    // Create a progress counter
    const progressCounter = document.createElement('div');
    progressCounter.className = 'loading-progress';
    progressCounter.innerHTML = '<span>0%</span>';
    progressCounter.style.position = 'absolute';
    progressCounter.style.bottom = '30%';
    progressCounter.style.left = '0';
    progressCounter.style.right = '0';
    progressCounter.style.textAlign = 'center';
    progressCounter.style.color = '#fff';
    progressCounter.style.fontSize = '1.5rem';
    progressCounter.style.fontWeight = 'bold';
    loader.appendChild(progressCounter);
    
    // Fade in the loader
    setTimeout(() => {
      loader.style.opacity = '1';
    }, 100);
  }
});

window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const astronaut = document.querySelector("[data-js='astro']");
  const boxStars = document.querySelectorAll(".box-of-star1, .box-of-star2, .box-of-star3, .box-of-star4");
  const progressCounter = document.querySelector('.loading-progress span');

  if (loader && astronaut && boxStars.length > 0) {
    // Ensure animations are running
    astronaut.style.animationPlayState = 'running';
    boxStars.forEach((box) => {
      box.style.animationPlayState = 'running';
    });
    
    // Simulate loading progress
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.floor(Math.random() * 10) + 1;
      if (progress > 100) progress = 100;
      
      if (progressCounter) {
        progressCounter.textContent = `${progress}%`;
      }
      
      if (progress === 100) {
        clearInterval(progressInterval);
        
        // Complete loading and fade out
        setTimeout(() => {
          loader.style.opacity = '0';
          loader.style.transition = 'opacity 0.5s ease-out';
          
          // Remove the loader from the DOM after the fade-out effect
          setTimeout(() => {
            loader.style.display = 'none';
          }, 500); // Consistent 500ms for the fade-out effect
        }, 500); // Small delay after reaching 100%
      }
    }, 200); // Update progress every 200ms
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
  const modalDate = document.getElementById('modalDate');
  const modalSkills = document.getElementById('modalSkills');
  const viewCertificateBtn = document.getElementById('viewCertificate');
    
  modalImage.src = imgElement.src;
  modalTitle.textContent = imgElement.dataset.title;
  modalDescription.textContent = imgElement.dataset.description;
  
  // Set additional certificate details
  if (imgElement.dataset.date) {
    modalDate.textContent = imgElement.dataset.date;
  } else {
    modalDate.textContent = 'N/A';
  }
  
  if (imgElement.dataset.skills) {
    // Create skill badges
    modalSkills.innerHTML = '';
    const skills = imgElement.dataset.skills.split(',');
    
    skills.forEach(skill => {
      const badge = document.createElement('span');
      badge.className = 'badge bg-danger me-2 mb-2';
      badge.textContent = skill.trim();
      modalSkills.appendChild(badge);
    });
  } else {
    modalSkills.textContent = 'N/A';
  }
  
  // Set the view certificate link to open the full image in a new tab
  viewCertificateBtn.href = imgElement.src;
    
  const modal = new bootstrap.Modal(document.getElementById('imageModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', function() {
  // Initialize carousel with infinite loop
  new bootstrap.Carousel(document.getElementById('imageCarousel'), {
      interval: 5000,  // Increased interval for better viewing
      wrap: true,
      touch: true
  });
  
  // Add keyboard navigation for certificates
  document.addEventListener('keydown', function(e) {
    if (document.querySelector('#imageCarousel')) {
      const carousel = bootstrap.Carousel.getInstance(document.getElementById('imageCarousel'));
      if (e.key === 'ArrowLeft') {
        carousel.prev();
      } else if (e.key === 'ArrowRight') {
        carousel.next();
      }
    }
  });
  
  // Add floating labels for certificate cards when hovered
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.classList.add('floating');
    });
    item.addEventListener('mouseleave', function() {
      this.classList.remove('floating');
    });
  });
});

// Handle resume download
document.addEventListener('DOMContentLoaded', function() {
  const resumeBtn = document.querySelector('#resumeBtn');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', function(e) {
      // Stop event only if the click was directly on the button
      if (e.target.id === 'resumeBtn') {
        e.preventDefault();
        const link = document.createElement('a');
        link.href = 'assets/resume.pdf';  // Updated path to match the assets folder
        link.target = '_blank';
        link.download = 'resume.pdf';
        link.click();
      }
    });
  }
});