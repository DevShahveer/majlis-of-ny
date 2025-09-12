let hamburger = document.getElementsByClassName("hamburger")[0];
let mobnav = document.getElementById("mob-nav");
let orderbutton = document.getElementById("mobile-order-btn");
let orderdropdown = document.getElementById("mobile-order-dropdown");
let exp = document.getElementById("about-exp-con");

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
  if (window.innerWidth < 768) {
  AOS.init({
    once: true,
    mirror: false,
    offset: 120,
    duration: 800
  });
  } else {
  AOS.init({
    once: false,
    mirror: false,
    offset: 120,
    duration: 800
  });
  }

  if (window.innerWidth >= 768 && typeof Lenis !== "undefined") {
  const lenis = new Lenis({
    duration: 2.0,
    smoothWheel: true,
    smoothTouch: false
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  }

  exp.innerText = "0+ Years of Experience";

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

  const aosDuration = 1200;

  function triggerCountUp() {
  setTimeout(startCountUp, aosDuration);
  }

  const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
    triggerCountUp();
    observer.unobserve(entry.target);
    }
  });
  }, { threshold: 0.5 });

  observer.observe(exp);

  window.addEventListener("load", () => {
  const rect = exp.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top < windowHeight && rect.bottom >= 0) {
    triggerCountUp();
  }
  });
});
