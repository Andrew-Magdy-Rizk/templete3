let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${((scrollTop / height) * 100).toFixed(2)}%`;
  console.log(el.style.width);
});
