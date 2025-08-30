// Hamburger toggle
let hamburger = document.getElementsByClassName("hamburger")[0];
let mobnav = document.getElementById("mob-nav");
let orderbutton = document.getElementById("mobile-order-btn");
let orderdropdown = document.getElementById("mobile-order-dropdown");

hamburger.addEventListener("click", () => {
    mobnav.classList.toggle("-translate-x-full");
});

orderbutton.addEventListener("click", () => {
    if(orderdropdown.style.maxHeight && orderdropdown.style.maxHeight !== "0px") {
        orderdropdown.style.maxHeight = "0px";
    } else {
        orderdropdown.style.maxHeight = orderdropdown.scrollHeight + "px";
    }

    let arrow = orderbutton.querySelector("svg");
    arrow.classList.toggle("rotate-180");
});

document.addEventListener("click", (e) => {
  if (!mobnav.contains(e.target) && !hamburger.contains(e.target)) {
    mobnav.classList.add("-translate-x-full"); // Close sidebar
  }
});

