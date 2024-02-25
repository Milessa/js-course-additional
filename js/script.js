//стрелочная функция которая создаёт новый массив со всеми элементами, прошедшими проверку тип value === type
const filterByType = (type, ...values) =>
    values.filter((value) => typeof value === type),
  hideAllResponseBlocks = () => {
    //создание константы которая создает массив из полученных объектов
    const responseBlocksArray = Array.from(
      document.querySelectorAll("div.dialog__response-block")
    );
    //из полученной константы выполняем функцию (в стилях добавляем значение none для display) один раз для каждого элемента из массиве
    responseBlocksArray.forEach((block) => (block.style.display = "none"));
  },
  //
  showResponseBlock = (blockSelector, msgText, spanSelector) => {
    //выполнение вызываемой функции
    hideAllResponseBlocks();
    //из полученного значения (выбранный класс блока) при вызове стрелочной функции добавляется стиль для display, значение block
    document.querySelector(blockSelector).style.display = "block";
    //если указано значение для spanSelector (id блока) то, выводить текст значение msgText
    if (spanSelector) {
      document.querySelector(spanSelector).textContent = msgText;
    }
  },
  //функция при ошибке
  showError = (msgText) =>
    showResponseBlock(".dialog__response-block_error", msgText, "#error"),
  //функция при правильном вводе
  showResults = (msgText) =>
    showResponseBlock(".dialog__response-block_ok", msgText, "#ok"),
  //функция при начальном в виде, когда еще ничего не произошло
  showNoResults = () => showResponseBlock(".dialog__response-block_no-results"),
  //функции которая определяет тип полученного значения,
  tryFilterByType = (type, values) => {
    //блок в котором находится одна или несколько инструкций для выполнения
    try {
      //eval у которого доступ к внешним переменным выполняет функцию при помощи с полученных данных, разделяя запятой и пробелом
      const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
      //выполнения тернарного оператора, если получено значение valuesArray, то есть у него  есть длина то выполнить вывод текста (если условие истинно), иначе выводить что отсутствуют данные типа что был введен
      const alertMsg = valuesArray.length
        ? `Данные с типом ${type}: ${valuesArray}`
        : `Отсутствуют данные типа ${type}`;
      //выполнение функции при правильном вводе с указанием текста(константы) для вывода
      showResults(alertMsg);
    } catch (e) {
      //инструкции, которые будут выполнены, если в блоке try произошла ошибка, в данном случае выполнение функции при ошибке с указанием текста для вывода
      showError(`Ошибка: ${e}`);
    }
  };
//создание константы по id
const filterButton = document.querySelector("#filter-btn");

//вешаем обработчик события по клику на полученную константу
filterButton.addEventListener("click", (e) => {
  //создание констант по id
  const typeInput = document.querySelector("#type");
  const dataInput = document.querySelector("#data");

  //если значение dataInput равно пустому полю то
  if (dataInput.value === "") {
    //добавляем специальное сообщение пользователю на dataInput
    dataInput.setCustomValidity("Поле не должно быть пустым!");
    //вывод функция при начальном в виде, когда еще ничего не произошло
    showNoResults();
  } else {
    //уведомление пользователю пустое
    dataInput.setCustomValidity("");
    //предотвратить действие по умолчанию
    e.preventDefault();
    //выполнение функции которая определяет тип полученного значения, убирает пробелы вначале и в конце строки
    tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
  }
});
