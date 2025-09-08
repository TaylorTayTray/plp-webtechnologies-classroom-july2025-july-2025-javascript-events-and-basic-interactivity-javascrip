// Light / Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});

// Counter Feature
let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("increaseBtn").addEventListener("click", function() {
  count++;
  counterValue.textContent = count;
});
document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  counterValue.textContent = count;
});

// Collapsible FAQ
const faqHeader = document.getElementById("faqHeader");
const faqAnswer = document.getElementById("faqAnswer");
faqHeader.addEventListener("click", function() {
  if (faqAnswer.style.display === "none") {
    faqAnswer.style.display = "block";
  } else {
    faqAnswer.style.display = "none";
  }
});

// Form Validation
const form = document.getElementById("myForm");
const messages = document.getElementById("formMessages");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // stop form from refreshing
  let errors = [];

  // Name must not be empty
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email must match a simple pattern
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email.");
  }

  // Password must be at least 6 characters
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long.");
  }

  // Show messages
  if (errors.length > 0) {
    messages.style.color = "red";
    messages.innerHTML = errors.join("<br>");
  } else {
    messages.style.color = "green";
    messages.innerHTML = "Form submitted successfully!";
  }
});
