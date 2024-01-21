"use strict";

let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

//Текущий день
let day = new Date();
let WeekDay = day.getDay();

if (WeekDay === 0) {
  WeekDay = 6;
} else {
  WeekDay--;
}

//Выходные дни - курсивом
week.forEach((day, i) => {
  if (WeekDay === i) {
    day = `<b>${day}</b>`;
  } else {
    `${day}`;
  }
  if (i === 5 || i === 6) {
    day = `<i>${day}</i>`;
  }
  document.write(`<div>${day}</div>`);
});
