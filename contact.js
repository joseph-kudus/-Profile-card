const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  // Basic validation
  if (!name || !message) {
    showMessage("Please fill in all fields", "error");
    return;
  }

  // Show loading state
  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  formMessage.style.display = "none";

  // Simulate sending - replace this with real API later
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Success
  showMessage(
    `Thanks ${name}! Your message has been sent. I'll reply soon.`,
    "success",
  );
  contactForm.reset();

  // Reset button
  submitBtn.classList.remove("loading");
  submitBtn.disabled = false;

  // Hide message after 5s
  setTimeout(() => {
    formMessage.style.display = "none";
  }, 5000);
});

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = "block";
}
