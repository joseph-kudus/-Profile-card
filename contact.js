const contactForm = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

// REPLACE THIS WITH YOUR FORMSPREE URL
const FORMSPREE_URL = "https://formspree.io/f/xpzgkqdo";

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    showMessage("Please fill in all fields", "error");
    return;
  }

  submitBtn.classList.add("loading");
  submitBtn.disabled = true;
  formMessage.style.display = "none";

  try {
    const response = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: name,
        message: message,
        _subject: `Portfolio Contact from ${name}`,
      }),
    });

    if (response.ok) {
      showMessage(
        `Thanks ${name}! Your message has been sent. I'll reply soon.`,
        "success",
      );
      contactForm.reset();
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    showMessage(
      "Oops! Something went wrong. Please try again or email me directly.",
      "error",
    );
  } finally {
    submitBtn.classList.remove("loading");
    submitBtn.disabled = false;

    setTimeout(() => {
      formMessage.style.display = "none";
    }, 5000);
  }
});

function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = `form-message ${type}`;
  formMessage.style.display = "block";
}
