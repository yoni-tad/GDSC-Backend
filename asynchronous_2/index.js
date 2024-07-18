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

// Event driven programming

/*
    Event-driven programming is a programming paradigm where the flow of the program is determined by events.
    Events can be user actions (e.g., clicks, key presses) or messages from other programs/threads.
    Key concepts:
        1. Event
            An action or occurrence recognized by software (e.g. mouse click, key press)
        2. Event Handler (Listener)
            A function that runs in response to an event.
            Attached to an element to handle specific events.
        3. Event Loop:
            Continuously checks for and processes events, invoking corresponding event handlers.
    Common events:
        1. Mouse Events:  click, dblclick, mouseover, mouseout, mousedown, mouseup
        2. Keyboard Events: keydown, keypress, keyup
        3. Form Events: submit, change, focus, blur, etc…
        4. Document / Window Events: load, resize, scroll, unload DOMContentLoaded, resize, scroll, etc.
    Benefits 
        1. Responsive UI
        2. Decoupled code
        3. Asynchronous operations 


*/

