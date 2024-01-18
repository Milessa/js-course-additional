"use strict";

//Exercise 1
const arr = ["4568", "289", "7655", "8795", "237", "459", "513"];

for (let i = 0; i < arr.length; i++) {
  let currentNumber = arr[i];
  if (currentNumber[0] === "2" || currentNumber[0] === "4") {
    console.log(currentNumber);
  }
}

//Exercise 2
let n = 100;

function isPrime(number) {
  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
}

function printPrimesWithDivisors(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(`Делители этого числа: 1 и ${i}`);
    }
  }
}

printPrimesWithDivisors(n);

// nextPrime: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   console.log("Делители этого числа: 1 и " + i);
// }
