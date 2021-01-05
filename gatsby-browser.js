import "./src/css/style.css";

window.addEventListener("load", function () {
  function scrollEvent() {
    if (window.scrollY > 0) {
      document.body.setAttribute('data-scroll-top', 'nottop')
    } else {
      document.body.setAttribute('data-scroll-top', 'top')
    }
  }
  window.addEventListener("scroll", scrollEvent)
  scrollEvent()
})