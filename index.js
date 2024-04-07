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

window.onscroll = function () {
  if (window.scrollY >= saction.offsetTop - 300) {
    if (!started) {
      counters.forEach((counter) => startCount(counter));
    }
    started = true;
  }
  if (window.scrollY >= progresssec.offsetTop - 100) {
    if (!startedprog) {
      countSkill.forEach((counter) => startCountprog(counter));
    }
    startedprog = true;
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

// Counter progress
let countSkill = document.querySelectorAll(".our-skills .the-progress span");
let progresssec = document.querySelector(".our-skills");
let startedprog = false;

function startCountprog(el) {
  let number = 0;
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.style.width = number + "%";
    number++;
    if (number == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
