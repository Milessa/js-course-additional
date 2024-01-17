"use script";

function getNumberInput() {
  while (true) {
    let userInput = prompt("Введите число:");

    // Проверка на отмену
    if (userInput === null) {
      userInput = prompt("Введите число:");
      continue;
    }

    // Удаление пробелов и проверка на число
    let cleanedInput = userInput.trim();
    if (cleanedInput === "" || isNaN(cleanedInput)) {
      alert("Пожалуйста, введите корректное число.");
    } else {
      return parseFloat(cleanedInput);
    }
  }
}

// Пример использования
var result = getNumberInput();
console.log("Вы ввели число: " + result);
