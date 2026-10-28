var menuToggle = document.getElementById("menuToggle");
var navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {
  var isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});

var navLinks = navigation.querySelectorAll("a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

var copyButton = document.getElementById("copyEmail");
var copyStatus = document.getElementById("copyStatus");

copyButton.addEventListener("click", function () {
  var email = copyButton.getAttribute("data-email");
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(function () {
      copyStatus.textContent = "Email address copied.";
    }).catch(function () {
      copyStatus.textContent = "Please copy the email address shown above.";
    });
  } else {
    copyStatus.textContent = "Please copy the email address shown above.";
  }
});
