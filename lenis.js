// lenis(smooth scroll)
const lenis = new Lenis({
  duration: 2.0,
  smoothWheel: true,
  smoothTouch: false
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

