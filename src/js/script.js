// Hamburger toggle
let hamburger = document.getElementsByClassName("hamburger")[0];
let mobnav = document.getElementById("mob-nav");
let orderbutton = document.getElementById("mobile-order-btn");
let orderdropdown = document.getElementById("mobile-order-dropdown");
let exp = document.getElementById("about-exp-con")

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
    mobnav.classList.add("-translate-x-full"); 
  }
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: false,   
    mirror: false,  
    offset: 120,   
    duration: 800 
  });
});

window.addEventListener("load", () => {
  AOS.refresh();
});

exp.innerText = "0+ Years of Experience";

// Count-up function
function startCountUp() {
  let aboutexp = 0;
  const timer = setInterval(() => {
    aboutexp++;
    exp.innerText = aboutexp + "+ Years of Experience";
    if (aboutexp >= 14) {
      clearInterval(timer);
    }
  }, 200);
}

// AOS animation duration in ms
const aosDuration = 1200;

// Function to trigger count-up with AOS delay
function triggerCountUp() {
  setTimeout(startCountUp, aosDuration);
}

// Intersection Observer to detect visibility
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      triggerCountUp();             // Start after AOS animation
      observer.unobserve(entry.target); // Only once
    }
  });
}, { threshold: 0.5 });

// Observe the element
observer.observe(exp);

// Also check on page load in case element is already visible
window.addEventListener("load", () => {
  const rect = exp.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < windowHeight && rect.bottom >= 0) {
    triggerCountUp();
  }
});

// Initialize AOS
AOS.init();
