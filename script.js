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

// switch (true) {
//   case userArg == null:
//   case userArg == "":
//     console.log("В качестве аргумента передана не строка");
//     break;
//   case typeof userArg === "string" && userArg.length < 30:
//     userArg = userArg.trim();
//     console.log(userArg);
//     break;
//   case typeof userArg === "string" && userArg.length > 30:
//     userArg = userArg.trim();
//     userArg = userArg.substring(0, 30) + "...";
//     console.log(userArg);
//     break;
//   default:
//     console.log("Bravo2");
// }
