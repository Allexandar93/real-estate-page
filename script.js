const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".leftArrow");
const rightBtn = document.querySelector(".rightArrow");
const btn = document.getElementById("menuBtn");
const dropdown = document.querySelector(".dropdown");

let activeSlide = 0;

timeChangeImg();

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setActiveSlide();
});

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setActiveSlide();
});

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
}

function timeChangeImg() {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
  setTimeout("timeChangeImg()", 2500);
}

function removeClass() {
  if (dropdown.classList.contains("opacity")) {
    dropdown.classList.remove("opacity");
  } else if (!dropdown.classList.contains("opacity")) {
    dropdown.classList.add("opacity");
  }
}

btn.addEventListener("click", removeClass);
