document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.reset();
  document.querySelector(".thanks-msg").style.display = "block";
  setTimeout(() => {
    document.querySelector(".thanks-msg").style.display = "none";
  }, 4000);
});
