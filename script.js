"use strict";

let userArg = prompt("Введите аргумент");

function check() {
  if (userArg == null || userArg == "") {
    console.log("В качестве аргумента передана не строка");
  } else if (typeof userArg === "string") {
    userArg = userArg.trim();

    if (userArg.length > 30) {
      userArg = userArg.substring(0, 30) + "...";
      console.log(userArg);
    } else {
      console.log(userArg);
    }
  }
}
check();
