let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100 - 8}%`;
});
