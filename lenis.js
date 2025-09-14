
if (window.innerWidth >= 768) {
  const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: false
  });
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}