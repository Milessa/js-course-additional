"use script";

const books = document.querySelectorAll(".book"),
  bookTitle = document.querySelectorAll("a"),
  book2Order = document.body.querySelector("ul").children,
  book5Order = document.body.querySelectorAll("ul")[5].children,
  book6LastElem = document.querySelectorAll("ul")[2].children;

//Восстановить порядок книг.
books[0].before(books[1]);
books[2].before(books[4]);
books[4].after(books[3]);
books[5].after(books[2]);

//Заменить картинку заднего фона
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

//Исправить заголовок в книге 3
bookTitle[4].textContent = "Книга 3. this и Прототипы Объектов";

//Удалить рекламу со страницы
document.querySelector(".adv").remove();

//Восстановить порядок глав во второй книге
book2Order[1].after(book2Order[3]);
book2Order[2].after(book2Order[6]);
book2Order[3].after(book2Order[8]);
book2Order[4].after(book2Order[6]);
book2Order[5].after(book2Order[7]);
book2Order[9].after(book2Order[7]);

//Восстановить порядок глав впятой книге
book5Order[1].after(book5Order[9]);
book5Order[2].after(book5Order[4]);
book5Order[3].after(book5Order[5]);
book5Order[8].after(book5Order[6]);

//в шестой книге добавить главу
book6LastElem[8].insertAdjacentHTML(
  "afterend",
  "<li>Глава 8: За пределами ES6</li>"
);
