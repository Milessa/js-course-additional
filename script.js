"use script";

const DomElement = function () {
  this.height;
  this.width;
  this.bg;
  this.fontSize;
  this.selector;
};

DomElement.prototype.selector = function () {
  let create = prompt(" . или # Назови свой элемент");
  let resultDot = create[0] == "." ? create.substr(1) : create;
  let resultSharp = create[0] == "#" ? create.substr(1) : create;

  //div & class
  if (create.startsWith(".") === true) {
    this.selector = document.createElement("div");
    this.selector.innerHTML = prompt("Текст внутри div");
    document.body.appendChild(this.selector);
    this.selector.classList.add(resultDot);
  } else if (create.startsWith("#") === true) {
    //paragraph & id
    this.selector = document.createElement("p");
    this.selector.innerHTML = prompt("Текст внутри параграф");
    document.body.appendChild(this.selector);
    this.selector.id = resultSharp;
  } else {
    alert(
      "Чтобы магия случилась введенный текст должен начаться с точки (.) либо с решетки (#)"
    );
  }

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

    do {
      this.fontSize = prompt("Размер текста");
    } while (!isNumber(this.fontSize));
    return (
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
};

const element = new DomElement();
element.selector();

console.log(element instanceof DomElement);
