// Contact form simulation
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("form-msg");
    msg.textContent = "Message sent! I will get back to you soon.";
    setTimeout(() => (msg.textContent = ""), 4000);
  });

// ===== Popup Controls =====
function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

// Close popup when clicking outside the content
window.onclick = function (event) {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
};
