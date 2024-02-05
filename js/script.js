"use script";

const todoControl = document.querySelector(".todo-control"),
  headerInput = document.querySelector(".header-input"),
  todoList = document.querySelector(".todo-list"),
  todoCompleted = document.querySelector(".todo-completed");

let todoContainer = document.querySelector(".todo-container");

let todoData = [];

let render = function (key) {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  todoData.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      addToLocalStorage(todoData);
      render();
    });

    li.querySelector(".todo-remove").addEventListener("click", function () {
      todoData = todoData.filter(function (index) {
        li.remove(item);
        return index !== item;
      });
      addToLocalStorage(todoData);
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = {
    text: headerInput.value,
    completed: false,
  };

  if (headerInput.value.trim() === "") {
    headerInput.value = "";
  } else {
    todoData.push(newTodo);
    addToLocalStorage(todoData);
  }
  headerInput.value = "";

  render();
});

function addToLocalStorage(todoData) {
  // convert the array to string then store it.
  localStorage.setItem("todoData", JSON.stringify(todoData));
  // render them to screen
  render(todoData);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem("todoData");
  // if reference exists
  if (reference) {
    // convert back to array and store it in todoData array
    todoData = JSON.parse(reference);
    render(todoData);
  }
}
getFromLocalStorage();
