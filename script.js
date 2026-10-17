
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", function() {
  message.textContent = "Thank you! Contact us at hello@formstudio.com.";
});
