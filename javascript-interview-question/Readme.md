# JavaScript Interview Questions Repository

## 🎯 Purpose

This repository is a comprehensive guide to JavaScript interview questions, covering fundamental to advanced concepts with practical code examples.

### 🔗 Recommended Videos

1. [JavaScript Interview Questions - RoadsideCoder](https://youtu.be/oUWRxJ19gfE?si=ru6ngNM3JDX7OOUU)
2. [JavaScript Interview Questions - Akshay Saini](https://youtu.be/pN6jk0uUrD8?si=2ZnCBGrhlJfLNEFb)

## 📚 Topics Covered

### 1. Variable Declarations: `var`, `let`, `const`

#### i. Scope Comparison

```javascript
// Scope Differences
var globalVar = 10; // Global/Function scope
let blockLet = 20; // Block scope
const blockConst = 30; // Block scope

function scopeDemo() {
    var functionVar = 40; // Function scope
    if (true) {
        var varInIf = 50; // Function scoped
        let letInIf = 60; // Block scoped
        const constInIf = 70; // Block scoped
    }
    console.log(varInIf); // 50 (accessible)
    // console.log(letInIf);  // ReferenceError
}
```

#### ii. Hoisting Behavior

```javascript
// Hoisting Demonstration
console.log(x); // undefined (var is hoisted)
// console.log(y); // ReferenceError (let is not hoisted)
// console.log(z); // ReferenceError (const is not hoisted)

var x = 10;
let y = 20;
const z = 30;
```

#### iii. Mutability

```javascript
// Mutability Comparison
var mutableVar = 10;
mutableVar = 20; // Allowed

let mutableLet = 30;
mutableLet = 40; // Allowed

const immutableConst = 50;
// immutableConst = 60; // TypeError: Assignment to constant variable

// Object mutability
const obj = { value: 10 };
obj.value = 20; // Allowed (object properties can change)
// obj = { newValue: 30 }; // TypeError
```

#### iv. Thread Safety Concept

```javascript
// Conceptual Thread Safety
// JavaScript is single-threaded, but scoping matters

let safeCounter = 0;
function incrementSafely() {
    let localCounter = safeCounter;
    localCounter++;
    safeCounter = localCounter;
}

// Compared to potentially unsafe var approach
var unsafeCounter = 0;
function incrementUnsafely() {
    unsafeCounter++; // More prone to race conditions in multi-threaded scenarios
}
```

#### v. Variable Shadowing

```javascript
// Shadowing Demonstration
// Shadowing occurs when a variable declared in an inner scope
// has the same name as a variable in the outer scope

// Shadowing with let
let a = 10; // Outer scope variable
function shadowWithLet() {
    let a = 20; // Shadows the outer 'a'
    console.log('Inside function:', a); // Output: 20
}
console.log('Outside function:', a); // Output: 10

// Shadowing with var
var b = 100; // Outer scope variable
function shadowWithVar() {
    var b = 200; // Shadows the outer 'b'
    console.log('Inside function:', b); // Output: 200
}
console.log('Outside function:', b); // Output: 100

// Shadowing with const
const c = 1000; // Outer scope variable
function shadowWithConst() {
    const c = 2000; // Shadows the outer 'c'
    console.log('Inside function:', c); // Output: 2000
}
console.log('Outside function:', c); // Output: 1000

// Illegal Shadowing Example
function illegalShadowing() {
    var x = 10;
    // let x = 20; // This would cause a SyntaxError

    if (true) {
        let x = 30; // This is legal for block-scoped variables
        console.log('Block scope:', x); // Output: 30
    }
}

// Global vs Function Scope Shadowing
var globalVar = 100;
function shadowGlobal() {
    var globalVar = 200; // Shadows global variable
    console.log('Inside function:', globalVar); // Output: 200
}
console.log('Global scope:', globalVar); // Output: 100
```

#### Key Shadowing Characteristics

1. Inner scope variables can shadow outer scope variables
2. `let` and `const` are block-scoped
3. `var` is function-scoped
4. Shadowing can occur with different declaration types
5. Outer scope variable remains unchanged

### Shadowing Nuances

-   Shadowing creates a new variable in the inner scope
-   The original variable in the outer scope is not modified
-   Be cautious to avoid unintentional shadowing
-   Different scoping rules apply for `var`, `let`, and `const`

### Key Takeaways

1. `var`: Function-scoped, hoisted, mutable
2. `let`: Block-scoped, not hoisted, mutable
3. `const`: Block-scoped, not hoisted, prevents reassignment

### 2. Execution Context in JavaScript

#### 🧠 Understanding Execution Context

Execution Context is a fundamental concept in JavaScript that defines the environment in which code is executed. It determines how variables, functions, and the `this` keyword behave during runtime.

#### Types of Execution Context

1. **Global Execution Context**
2. **Function Execution Context**
3. **Eval Execution Context**

#### Execution Context Lifecycle

1. **Creation Phase**

    - Creates the Global/Function Object
    - Sets up Memory Heap
    - Initializes `this` binding
    - Hoists variables and function declarations

2. **Execution Phase**
    - Executes code line by line
    - Assigns values to variables
    - Calls functions

#### Code Visualization

```javascript
// Execution Context Example
console.log(x); // undefined (hoisting)
var x = 10;

function contextDemo(a) {
    var b = 20;
    console.log(a, b); // Creates a new function execution context
}

contextDemo(5);
```

#### Call Stack Demonstration

```javascript
function first() {
    second(); // Function calls create new execution contexts
    console.log('First function');
}

function second() {
    third();
    console.log('Second function');
}

function third() {
    console.log('Third function');
}

first(); // Triggers the call stack
```

#### Recommended Visualization

**Recommended GIF**:
[JavaScript Execution Context Visualization](https://cdn.hashnode.com/res/hashnode/image/upload/v1662259607252/cUIUWmldx.gif)

_Note: Replace the GIF URL with an actual animated visualization of the execution context process._

#### Key Takeaways

-   Execution Context manages variable and function environments
-   Call Stack tracks function execution order
-   Understanding context helps predict code behavior
-   Hoisting and `this` binding are crucial aspects

#### Interview Tips

-   Explain the difference between creation and execution phases
-   Understand how the call stack works
-   Know how variables are hoisted
-   Demonstrate knowledge of `this` keyword behavior

#### Common Interview Questions

1. What is an Execution Context?
2. Explain the Call Stack
3. How does hoisting work in different execution contexts?
4. What is the difference between Global and Function Execution Context?

### 3. Closures and Function Concepts

1. **Lexical Scoping**
2. **Closure Mechanisms**
3. **Function Currying**
4. **Higher-Order Functions**

#### Code Example

```javascript
// Closure Example
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
    };
}
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
```

### 5. Asynchronous Programming

1. **Promises**
2. **Async/Await**
3. **Error Handling**
4. **Event Loop**

#### Code Example

```javascript
// Async/Await with Error Handling
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Failed to fetch user data', error);
    }
}
```

### 4. Data Manipulation

1. **Array Methods**: `map()`, `filter()`, `reduce()`
2. **Object Manipulation**
3. **Spread and Rest Operators**
4. **Destructuring**

#### Code Example

```javascript
// Advanced Array Manipulation
const numbers = [1, 2, 3, 4, 5];
const squared = numbers
    .map(x => x * x)
    .filter(x => x > 10)
    .reduce((a, b) => a + b, 0);
```

### 6. Advanced JavaScript Concepts

1. **Prototypal Inheritance**
2. **This Keyword**
3. **Generators**
4. **Proxy and Reflect**

#### Code Example

```javascript
// Prototypal Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}
```

#### Recommended Resources

-   [MDN Web Docs: Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
-   [JavaScript.info: Execution Context](https://javascript.info/call-stack)
-   Video: "JavaScript Execution Context Explained" by top JS YouTubers

## 🛠 Interview Preparation Strategies

1. Understand core scoping mechanisms
2. Practice variable declaration scenarios
3. Know the nuanced differences between `var`, `let`, `const`
4. Understand core concepts, not just syntax
5. Practice coding challenges
6. Learn to explain your thought process
7. Focus on problem-solving approaches

## 📝 Recommended Resources

1. MDN Web Docs
2. JavaScript.info
3. "Eloquent JavaScript" by Marijn Haverbeke
4. "You Don't Know JS" book series
