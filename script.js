"use strict";

// 1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
let numArray = ("" + num).split("").map(Number);
let numResult = 1;

for (var i = 0; i < numArray.length; ++i) {
  numResult *= numArray[i];
}

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let numResultPow = numResult ** 3;

// 4) Вывести в консоль первые 2 цифры полученного числа
console.log(String(numResultPow).slice(0, 2));
