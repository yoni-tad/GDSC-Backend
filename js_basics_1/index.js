// ---------------------- JS Basics 1 Course ----------------------

// VARIABLES
/*
    We can use var, let and const 
    Differences
    1. Var
        Function scoped
        Can be re-declared and updated
    2. Let
        Block scoped
        can't re-declared but can updated
    3. Block scoped
        can't re-declared and updated
*/

var x = 10;
let y = 0;
const PI = 3.14;

// DATA TYPES
/*
    Primary data types
        1. Numbers
        2. String
        3. Boolean
        4. Null 
        5. Undefined
        6. Symbol
    Complex data types
        1. Object
            Represents a collection of key-value pairs
        2. Array
            Represents an ordered list of values
*/

let age = 18;
let name = 'Yoni';
let isStudent = true;
let value = null;
let total;
let id = Symbol('id');
let person = {
    name: "Yoni",
    age: 47,
    isStudent: true,
}
let fruits = ["apple", "banana", "cherry"];

// STRING OPERATION
/*
    Common string methods
        1. Concatenation
            use to add strings
        2. Length
            to get characters length
        3. Accessing characters
            Can get every characters value by index
        4. Substring
            can filter characters by index
*/

let firstName = "Yonatan";
let greeting = "Hi " + firstName;
let len = firstName.length;
let firstCharacter = firstName[0];
let subName = firstName.substring(0, 4);

// CONDITIONS
/*
    Conditional statements control the flow of code based on certain conditions.
    Also js have nested if statements
*/

let hisAge = 18;
if (hisAge >= 18) {
    console.log('Get out from home');
}

// LOOPS
/*
    Loops allow you to execute a block of code repeatedly.
    Useful for tasks that require repetition
    1. for loop
        use to run a block of code a specified number of times.
        for (initialization, condition, increment)
    2. while loop
        repeats a block of code as long as a specified condition is true
        while (condition)
    3. do ... while loop
        Similar to the while loop, but executes the block of code at least once before checking the condition
*/

for (let i = 0; i < 5; i++){
    console.log("Number: " + i);
}

let i = 0;
while (i < 5){
    console.log("Number: " + i);
    i++;
}

do {
    console.log("Number: " + i);
    i++;
} while (i < 5);