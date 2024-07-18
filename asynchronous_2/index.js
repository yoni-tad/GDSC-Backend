// ---------------------- Asynchronous 2 Course ----------------------

//  Allocation in JS
/*
    Heap: Data is stored randomly in a heap
    Memory Stack: is allocated in the form of stacks. Mainly used for functions.
    Function call Stack: s a function that keeps track of all other functions executed in run time.

    Stack: order from bottom to top arranged (last in first out)
    Queue: order first in first out or last in last out
*/
// call Stack
function LevelTwo() {
  console.log("Inside Level Two!");
}
function LevelOne() {
  LevelTwo();
}
function main() {
  LevelOne();
}
main();

// Event Loop
/*
    The event loop allows js to perform non-blocking operations, like handling I/O tasks, timers and user interactions, without stalling the main thread. 
    Key Concepts
        1. call stack: 
            The place where JavaScript keeps track of function calls.
            Functions are added to the stack when called and removed when returned.
            Only one function is executed at a time.
        2. Web API: 
            Provided by the browser, they handle asynchronous operations.
            When such an operation completes, a callback function is sent to the callback queue
        3. Callback Queue (Task Queue):
            A queue where callback functions wait to be executed.
            Callback Functions are moved here after Web APIs complete their tasks.
        4. Microtask Queue:
            The Microtask Queue is used for scheduling more urgent tasks including promises.  
        5. Event Loop:
            Continuously checks the call stack and callback queue.
            Moves callbacks from the queue to the stack when the stack is empty.
    Process flow
        1. Function call(call stack)
        2. Async task(web api)
        3. Callback(queues)
        4. Event Loop(event loop)

*/

