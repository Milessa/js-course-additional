"use script";
document.body.style.backgroundColor = "";

const btnStart = document.createElement("button"),
  btnReset = document.createElement("button"),
  divBird = document.createElement("div"),
  car = document.createElement("img"),
  divCar = document.createElement("div"),
  bird = document.createElement("img");
let flyInterval = 0;

const resetCanvas = () => {
  if (flyInterval > 0) {
    cancelAnimationFrame(flyInterval);
  }
  divCar.style.left = document.body.clientWidth + "px";
  divBird.style.left = "1px";
  divBird.style.top = "10px";
  btnStart.textContent = "Start";
};

const flyAnimate = () => {
  const leftBird = parseFloat(divBird.style.left),
    leftCar = parseFloat(divCar.style.left);
  if (leftBird < window.innerWidth) {
    if (leftBird > window.innerWidth / 4 && leftCar > -car.width) {
      divCar.style.left = leftCar - 5 + "px";
    }
    divBird.style.left = leftBird + 3 + "px";
    flyInterval = requestAnimationFrame(flyAnimate);
  } else {
    cancelAnimationFrame(flyInterval);
    btnStart.textContent = "Stoped";
    alert('Для повтора нажмите "Reset"');
  }
};

const startAnimation = () => {
  if (btnStart.textContent === "Start") {
    btnStart.textContent = "Pause";
    flyInterval = requestAnimationFrame(flyAnimate);
  } else if (btnStart.textContent !== "Stoped") {
    btnStart.textContent = "Start";
    cancelAnimationFrame(flyInterval);
  }
};

btnStart.textContent = "Start";
btnReset.textContent = "Reset";
car.src = "./img/suv.png";
car.width = "110";
car.style.transform = "scaleX(-1)";
bird.src = "./img/flying.gif";
bird.width = "110";
bird.style.transform = "scaleX(-1)";
divCar.style.position = "relative";
divBird.style.position = "relative";

divBird.appendChild(bird);
divCar.appendChild(car);

btnStart.addEventListener("click", startAnimation);
btnReset.addEventListener("click", resetCanvas);

document.body.appendChild(btnStart);
document.body.appendChild(btnReset);
document.body.appendChild(divBird);
document.body.appendChild(divCar);

resetCanvas();
