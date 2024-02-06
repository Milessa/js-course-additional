"use script";

document.addEventListener("DOMContentLoaded", function () {
  const DomElement = function () {
    this.height;
    this.width;
    this.bg;
    this.selector;
  };

  DomElement.prototype.selector = function () {
    this.selector = document.createElement("div");
    document.body.appendChild(this.selector);
    this.selector.classList.add("square");

    let css = function () {
      function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      do {
        this.height = prompt("Высота элемента");
      } while (!isNumber(this.height));

      do {
        this.width = prompt("Ширина элемента");
      } while (!isNumber(this.width));

      this.bg = prompt("Цвет фона\n(на английском или #Hex color)");

      return (
        "position: absolute;" +
        "top: 0;" +
        "left: 0 ;" +
        "width: " +
        this.width +
        "px; " +
        "height: " +
        this.height +
        "px; " +
        "font-size: " +
        this.fontSize +
        "px; " +
        "background: " +
        this.bg +
        "; "
      );
    };
    let s = css();
    this.selector.style.cssText = s;
    let modifier = 10;

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.selector.style.top = `${
            parseInt(this.selector.style.top) - modifier
          }px`;
          break;
        case "ArrowDown":
          this.selector.style.top = `${
            parseInt(this.selector.style.top) + modifier
          }px`;
          break;
        case "ArrowLeft":
          this.selector.style.left = `${
            parseInt(this.selector.style.left) - modifier
          }px`;
          break;
        case "ArrowRight":
          this.selector.style.left = `${
            parseInt(this.selector.style.left) + modifier
          }px`;
          break;
      }
    });
  };

  const element = new DomElement();
  element.selector();

  console.log(element instanceof DomElement);
});
