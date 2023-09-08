// Replace text in header
const checkReplace = document.querySelector(".replace-me");

var replace = new ReplaceMe(document.querySelector(".replace-me"), {
  animation: "animated fadeIn", // Animation class or classes
  speed: 2000, // Delay between each phrase in miliseconds
  separator: ",", // Phrases separator
  hoverStop: false, // Stop rotator on phrase hover
  clickChange: false, // Change phrase on click
  loopCount: "infinite", // Loop Count - 'infinite' or number
  autoRun: true, // Run rotator automatically
  onInit: false, // Function
  onChange: false, // Function
  onComplete: false, // Function
});

// Navbar Sticky transparenty
const navbar = document.querySelector(".navbar");

const userScroll = function () {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      navbar.classList.add("navbar--scrolled");
      navbar.classList.add("navbar--border");
    } else if (window.scrollY > 30 && window.scrollY < 70) {
      navbar.classList.remove("navbar--border");
      navbar.classList.add("navbar--border-fade");
    } else {
      navbar.classList.remove("navbar--border-fade");
      navbar.classList.remove("navbar--scrolled");
      navbar.classList.remove("navbar--border");
    }
  });
};
document.addEventListener("DOMContentLoaded", userScroll);

// Video Modal
const videoBtn = docuemnt.querySelector(".video-btn");
const videoModal = docuemnt.querySelector("#videoModal");
const video = docuemnt.querySelector("#video");
let videoSource;

if (videoBtn !== null) {
  videoBtn.addEventListener("click", () => {
    videoSource = videoBtn.getAttribute("data-bs-src");
  });
}

if (videoModal !== null) {
  videoModal.addEventListener("shown.bs.modal", () => {
    video.setAttribute(
      "src",
      videoSource + "?autoplay=1;modestbranding=1;showInfo=0"
    );
  });

  videoModal.addEventListener("hide.bs.modal", () => {
    video.setAttribute("src", videoSource);
  });
}
