"use strict";

let getData = (url) => {
  return fetch(url).then((response) => response.json());
};

let sendData = (url, data) => {
  return fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

getData("db.json").then((data) => {
  sendData(
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(data)
  ).then((data) => {
    console.log(data);
  });
});
