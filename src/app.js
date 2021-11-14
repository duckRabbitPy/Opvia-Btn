let buttons = document.querySelectorAll("button");
let counter = document.querySelector("#counter");
let root = document.querySelector(":root");
const clickSound = document.querySelector(".clickSound");

buttons.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    clickSound.currentTime = 0;
    clickSound.play();
    let count = Number(counter.innerHTML);
    if (event.target.id === "increment") {
      count++;
      counter.innerHTML = count;
    } else {
      count--;
      counter.innerHTML = count;
    }
    count < 0
      ? root.setAttribute("current-theme", "dark-theme")
      : root.setAttribute("current-theme", "light-theme");
  })
);
