// ---------------------- Asynchronous 2 Examples ----------------------
// call Stack
// console.log('One');
// console.log('Two');

function logThree() {
  console.log("Three");
}

function logThreeAndFour() {
  logThree();
  console.log("Four");
}
// logThreeAndFour();

// Synchronous blocking
// console.log("Before delay");

function delayed(sec) {
  let now;
  let start = (now = Date.now());

  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
// delayed(5);
// console.log("After delay");

// The event loop with delayed seTimeout
// console.log("Before delay");
// setTimeout(() => {
//     console.log("Here!")
// }, 3000);
// console.log("Important task!");

// The event loop with 0s delayed seTimeout
// console.log("Start");
// setTimeout(() => {
//   console.log("callback");
// }, 0);
// console.log("End");
// Task queue vs micro queue
// console.log("Start");
// setTimeout(() => {
//   console.log("callback");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("Promise");
// });
// console.log("End");

// call stack can be seen on error message
// function three() {
//   throw new Error("Opps!");
// }
// function two() {
//   three();
// }
// function one() {
//   two();
// }
// one();

// Adding a function to rhe stack infinitely error
// function loop() { 
//     return loop();
// } 
// loop();
