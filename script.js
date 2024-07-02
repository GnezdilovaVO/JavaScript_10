"use strict";
const images = document.querySelectorAll(".swipe");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const indicEls = document.querySelectorAll(".indicator");
// console.log(images);
let currentImg = 0;

leftBtn.addEventListener("click", () => {
  currentImg = (currentImg - 1 + images.length) % images.length;
  images.forEach((img, index) => {
    if (index === currentImg) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
});
rightBtn.addEventListener("click", () => {
  currentImg = (currentImg + 1) % images.length;
  images.forEach((img, index) => {
    if (index === currentImg) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
});

indicEls.forEach((indicEl, index) => {
  indicEl.addEventListener("click", () => {
    currentImg = index;
    images.forEach((img, index) => {
      if (index === currentImg) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });
  });
});
images.forEach((img, index) => {
  if (index === currentImg) {
    img.classList.add("active");
  } else {
    img.classList.remove("active");
  }
});
