"use strict";

//Exercise 1
console.log("Exercise 1");

let lang = {
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
};

let userInput = prompt("На каком языке выводить дни недели \nen или ru");

// If method
if (userInput == "en") {
  console.log("Method if:" + lang.en);
} else {
  console.log("Method if:" + lang.ru);
}

// Switch method
switch (userInput) {
  case "en":
    console.log("Method switch:" + lang.en);
    break;
  case "ru":
    console.log("Method switch:" + lang.en);
    break;
  default:
    console.log("Сорри, но выбери язык для вывода");
}

//Multidimensional array method
console.log("Method multidimensional array: " + lang[userInput]);

//Exercise 2
let namePerson = prompt("Ваше имя?");

namePerson == "Артем"
  ? console.log("Директор")
  : namePerson == "Александр"
  ? console.log("Преподаватель")
  : console.log("Студент");
