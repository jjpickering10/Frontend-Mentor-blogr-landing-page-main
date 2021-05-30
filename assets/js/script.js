const hamburger = document.getElementById("hamburger");
let dropDown = document.getElementById("drop-down");

hamburger.addEventListener("click", () => {
  dropDown.classList.toggle("flex-addition");
});
