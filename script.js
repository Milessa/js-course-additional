"use strict";

const everySecond = () => {
  const day = new Date();
  const week = [
    "Воскресенье, ",
    "Понедельник, ",
    "Вторник, ",
    "Среда, ",
    "Четверг, ",
    "Пятница, ",
    "Суббота, ",
  ];
  const month = [
    " января ",
    " февраля ",
    " марта ",
    " апреля ",
    " мая ",
    " июня ",
    " июля ",
    " августа ",
    " сентября ",
    " октября ",
    " ноября ",
    " декабря ",
  ];
  const numEnding = (num, timeText = "") => {
    const textEnd =
      timeText === "h"
        ? [" час ", " часа ", " часов "]
        : timeText === "m"
        ? [" минута ", " минуты ", " минут "]
        : [" секунда ", " секунды ", " секунд "];
    const n = num % 10;
    return num > 4 && num < 20
      ? num + textEnd[2]
      : n === 1
      ? num + textEnd[0]
      : n > 1 && n < 5
      ? num + textEnd[1]
      : num + textEnd[2];
  };

  const addZero = (elem) => {
    if (String(elem).length === 1) {
      return "0" + elem;
    } else {
      return String(elem);
    }
  };

  const currentDateA =
    "Сегодня " +
    week[day.getDay()] +
    day.getUTCDate() +
    month[day.getUTCMonth()] +
    day.getFullYear() +
    " года, " +
    numEnding(day.getHours(), "h") +
    numEnding(day.getMinutes(), "m") +
    numEnding(day.getSeconds());

  const currentDateB =
    addZero(day.getUTCDate()) +
    "." +
    addZero(day.getUTCMonth()) +
    "." +
    day.getFullYear() +
    " - " +
    addZero(day.getHours()) +
    ":" +
    addZero(day.getMinutes()) +
    ":" +
    addZero(day.getSeconds()) +
    " ";

  document.getElementById("demo").innerHTML =
    `<p><b>${currentDateA}</b></p>` + `<b>${currentDateB}</b>`;
};

setInterval(everySecond, 1000);
