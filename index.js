let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${((scrollTop / height) * 100).toFixed(2)}%`;
});

// counter up
let counters = document.querySelectorAll(".stats .box .number");
let saction = document.querySelector(".stats");
let started = false;

// Counter progress
let countSkill = document.querySelectorAll(".our-skills .the-progress span");
let progresssec = document.querySelector(".our-skills");

// make function for scroll to top
let secArticle = document.querySelector(".article");
let secGallery = document.querySelector(".gallery");
let secFeatures = document.querySelector(".features");
let secTestimonials = document.querySelector(".testimonials");
let secTeammembers = document.querySelector(".teammembers");

window.onscroll = function () {
  if (window.scrollY >= saction.offsetTop - 300) {
    if (!started) {
      counters.forEach((counter) => startCount(counter));
    }
    started = true;
  }
  if (window.scrollY >= progresssec.offsetTop - 100) {
    countSkill.forEach((counter) => {
      counter.style.width = counter.dataset.goal;
    });
  }
  if (window.scrollY >= secArticle.offsetTop / 2) {
    secArticle.classList.add("active");
  }
  if (window.scrollY >= secGallery.offsetTop - 500) {
    secGallery.classList.add("active");
  }
  // console.log(secFeatures.offsetTop - 500);
  // console.log(window.scrollY);
  if (window.scrollY >= secFeatures.offsetTop - 500) {
    secFeatures.classList.add("active");
  }
  if (window.scrollY >= secTestimonials.offsetTop - 500) {
    secTestimonials.classList.add("active");
  }
  if (window.scrollY >= secTeammembers.offsetTop - 500) {
    secTeammembers.classList.add("active");
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// set counter for timer
let countDownDate = new Date("Sep 2, 2024 23:59:59").getTime();

let count = setInterval(function () {
  let now = new Date().getTime();

  let datediff = countDownDate - now;

  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((datediff % (1000 * 60)) / 1000);

  document.querySelector(".time .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".time .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".time .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".time .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (datediff < 0) {
    clearInterval(count);
  }
}, 1000);
