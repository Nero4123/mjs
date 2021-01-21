//this needs a way to stop the number from stacking once the submit button has been pressed once.
//ex: press it twice and the percentage will go over 100.

const dlist = document.querySelectorAll("div");
const span = document.querySelector("span");
const form = document.querySelector(".quiz-form");
let x = 0;

const submit = document.addEventListener("submit", (e) => {
  e.preventDefault();

  dlist[2].classList.remove("d-none");

  if (form.q1.value === "B") {
    x += 25;
  }

  if (form.q2.value === "B") {
    x += 25;
  }

  if (form.q3.value === "B") {
    x += 25;
  }

  if (form.q4.value === "B") {
    x += 25;
  }
  span.innerHTML = x + "%";
});
