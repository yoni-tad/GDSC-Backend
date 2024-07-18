// ---------------------- Asynchronous 1 Exercise ----------------------
// QUIZ
Promise.resolve().then(() => {
    console.log(1);
});

setTimeout(() => {
    console.log(2);
}, 1000);

queueMicrotask(() => {
    console.log(3)
    queueMicrotask(() => console.log(4));
});

console.log(5);