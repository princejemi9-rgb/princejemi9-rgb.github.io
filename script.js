// Contact form simulation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("form-msg");
    msg.textContent = "Message sent! I will get back to you soon.";
    setTimeout(() => (msg.textContent = ""), 4000);
  });
