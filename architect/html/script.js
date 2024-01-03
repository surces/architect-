document.addEventListener("DOMContentLoaded", function() {
    let openButton = document.getElementById("openButton");
    let closeButton = document.querySelector(".closebtn");
    let myOverlay = document.getElementById("myOverlay");

    openButton.onclick = function() {
      myOverlay.classList.add("open-menu");
      openButton.style.display = "none"; // Hide open button
    };

    closeButton.onclick = function() {
      myOverlay.classList.remove("open-menu");
      openButton.style.display = "block"; // Show open button
    };
  });