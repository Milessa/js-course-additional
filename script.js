"use script";

const inputText = document.querySelector("#text"),
  btn = document.querySelector("#btn"),
  square = document.querySelector("#square"),
  interiorBtn = document.querySelector("#e_btn"),
  range = document.querySelector("#range"),
  circle = document.querySelector("#circle"),
  span = document.querySelector("#range-span");

const colorChange = function () {
  square.style.backgroundColor = inputText.value;
};

btn.addEventListener("click", colorChange);

interiorBtn.style.display = "none";

const dataChange = function () {
  span.textContent = range.value;
  circle.style.width = range.value + "%";
  circle.style.height = range.value + "%";
};
range.addEventListener("input", dataChange);
