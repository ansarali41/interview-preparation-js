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

### Key Takeaways
1. `var`: Function-scoped, hoisted, mutable
2. `let`: Block-scoped, not hoisted, mutable
3. `const`: Block-scoped, not hoisted, prevents reassignment

### 2. Closures and Function Concepts

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

### 3. Asynchronous Programming

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

### 5. Advanced JavaScript Concepts

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
