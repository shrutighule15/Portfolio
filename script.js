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




