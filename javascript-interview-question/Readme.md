# JavaScript Interview Preparation Repository

This repository contains in-depth examples and implementations of key JavaScript concepts to help prepare for technical interviews.

## Youtube Channel Reference

-   [JavaScript Interview Questions - RoadsideCoder](https://youtu.be/oUWRxJ19gfE?si=ru6ngNM3JDX7OOUU)
-   [JavaScript Interview Questions - Akshay Saini](https://youtu.be/pN6jk0uUrD8?si=2ZnCBGrhlJfLNEFb)

## Covered JavaScript Topics

### 1. Scope and Variable Behavior

-   **Scope**: Understanding variable accessibility and visibility
-   **Shadowing**: Exploring variable shadowing and its implications
-   **Hoisting**: Examining how variable and function declarations are moved to the top of their scope

#### Scope Demonstration

```javascript
// Global, Block, and Function Scope
var a = 10; // Global scope
{
    let b = 20; // Block scope
    const c = 30; // Block scope
    console.log(a, b, c); // Output: 10, 20, 30
}
console.log(a); // Output: 10
console.log(b); // ReferenceError: b is not defined
```

#### Variable Shadowing

```javascript
// Shadowing with different variable declarations
let a = 10;
function testLet() {
    let a = 20; // Shadows the outer 'a'
    console.log('Inside function', a); // Output: 20
}
console.log('Outside function', a); // Output: 10

const c = 1000;
function testConst() {
    const c = 2000; // Shadows the outer 'c'
    console.log('Inside function', c); // Output: 2000
}
console.log('Outside function', c); // Output: 1000
```

### 2. Functions and Advanced Function Concepts

-   **Function Types**: Different ways of defining and using functions
-   **Closures**: In-depth exploration of lexical scoping and closure mechanisms
-   **Currying**: Implementing function currying techniques
-   **Higher-Order Functions**: Demonstrating functions that take or return other functions

#### Closures

```javascript
function outerFunction(x) {
    let outerVar = x;
    function innerFunction(y) {
        return outerVar + y; // Accessing outerVar from parent scope
    }
    return innerFunction;
}
const closure = outerFunction(10);
console.log(closure(5)); // Output: 15
```

#### Currying

```javascript
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

function add(a, b, c) {
    return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
```

### 3. Asynchronous Programming

-   **Promises**: Understanding promise-based asynchronous operations
-   **Async/Await**: Implementing modern asynchronous programming patterns

#### Promises and Async/Await

```javascript
// Promise example
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
}

// Async/Await usage
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
```

### 4. Data Manipulation and Array Methods

-   **Map, Filter, Reduce**: Advanced array transformation and reduction techniques
-   **Array Polyfills**: Custom implementations of array methods
-   **Object Manipulation**: Working with object properties and methods

#### Map, Filter, Reduce

```javascript
const numbers = [1, 2, 3, 4, 5];

// Map: Transform array
const squared = numbers.map(num => num * num);
// Output: [1, 4, 9, 16, 25]

// Filter: Select elements
const evenNumbers = numbers.filter(num => num % 2 === 0);
// Output: [2, 4]

// Reduce: Aggregate array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
// Output: 15
```

#### Array Polyfill Example

```javascript
// Custom map implementation
Array.prototype.customMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const original = [1, 2, 3];
const mapped = original.customMap(x => x * 2);
// Output: [2, 4, 6]
```

### 5. Type Concepts

-   **Boxing**: Understanding type boxing and unboxing in JavaScript

#### Boxing

```javascript
// Automatic boxing of primitive types
const str = 'Hello';
console.log(str.toUpperCase()); // Automatically converts primitive to String object
```

## Learning Objectives

-   Deepen understanding of JavaScript's core concepts
-   Prepare for technical interviews
-   Improve problem-solving skills with JavaScript

## Repository Structure

Each JavaScript file focuses on a specific concept or interview-related topic, providing practical examples and explanations.

## How to Use

Clone the repository and explore each file to understand the different JavaScript concepts. Run the files using Node.js to see the implementations in action.

## Recommended Prerequisites

-   Basic to intermediate JavaScript knowledge
-   Familiarity with ES6+ syntax
-   Understanding of programming fundamentals
