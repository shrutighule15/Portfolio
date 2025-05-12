//gallery
let currentImageIndex = 0;
let galleryImages = [];

function openGallery(images) {
  galleryImages = images;
  currentImageIndex = 0;
  showImage();
  document.getElementById('galleryModal').style.display = 'block';
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
}

function showImage() {
  const imgElement = document.getElementById('galleryImage');
  imgElement.src = galleryImages[currentImageIndex];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  showImage();
}

//contact me
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default submission

  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Check if any field is empty
  if (!name || !email || !message) {
    alert("Please fill out all fields before sending your message.");
    return;
  }

  // If all fields are filled, proceed to send the data
  sendEmail(name, email, message);
});

function sendEmail(name, email, message) {
  // This function will be handled using EmailJS or a backend
  console.log("Ready to send:", { name, email, message });
}



document.addEventListener("DOMContentLoaded", function() {
  // Get all sections you want to animate
  const sections = document.querySelectorAll('.skills, .projects');

  // Function to check if section is in view
  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle adding the animate class
  function handleAnimation() {
    sections.forEach(section => {
      if (isInView(section)) {
        section.classList.add('animate');
      }
    });
  }

  // Listen for scroll event
  window.addEventListener('scroll', handleAnimation);

  // Call handleAnimation on page load in case any sections are already in view
  handleAnimation();
});

// Function to detect if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Apply animation when section is in view
function applyAnimationOnScroll() {
    const sections = document.querySelectorAll('.section'); // Replace with your section class or id
    sections.forEach((section) => {
        if (isInViewport(section) && !section.classList.contains('animated')) {
            section.classList.add('animated'); // Add class to trigger animation
            section.classList.add('fadeDown'); // Example: Apply a fadeDown class (add your animation)
        }
    });
}

// Listen for scroll events to check if any section is in view
window.addEventListener('scroll', applyAnimationOnScroll);

// Also, apply animations on page load in case sections are already in view
window.addEventListener('load', applyAnimationOnScroll);

// Optional: Detect when specific section is active via URL hash
window.addEventListener('hashchange', () => {
    applyAnimationOnScroll(); // Apply animation when a specific section is navigated to
});

