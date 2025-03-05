# JavaScript Interview Questions Repository

## 🎯 Purpose

This repository is a comprehensive guide to JavaScript interview questions, covering fundamental to advanced concepts with practical code examples.

### 🔗 Recommended Videos

-   [JavaScript Interview Questions - RoadsideCoder](https://youtu.be/oUWRxJ19gfE?si=ru6ngNM3JDX7OOUU)
-   [JavaScript Interview Questions - Akshay Saini](https://youtu.be/pN6jk0uUrD8?si=2ZnCBGrhlJfLNEFb)

## 📚 Topics Covered

### 1. Scope and Variable Behavior

-   **Scope Types**: Global, Function, and Block Scope
-   **Variable Declarations**: `var`, `let`, `const`
-   **Variable Hoisting**
-   **Shadowing**

#### Code Example

```javascript
// Scope and Variable Behavior
var globalVar = 10; // Global scope
{
    let blockVar = 20; // Block scope
    const immutableVar = 30; // Block scope, immutable
    console.log(globalVar, blockVar, immutableVar);
}
```

### 2. Closures and Function Concepts

-   **Lexical Scoping**
-   **Closure Mechanisms**
-   **Function Currying**
-   **Higher-Order Functions**

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

-   **Promises**
-   **Async/Await**
-   **Error Handling**
-   **Event Loop**

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

-   **Array Methods**: `map()`, `filter()`, `reduce()`
-   **Object Manipulation**
-   **Spread and Rest Operators**
-   **Destructuring**

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

-   **Prototypal Inheritance**
-   **This Keyword**
-   **Generators**
-   **Proxy and Reflect**

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

-   Understand core concepts, not just syntax
-   Practice coding challenges
-   Learn to explain your thought process
-   Focus on problem-solving approaches

## 📝 Recommended Resources

-   MDN Web Docs
-   JavaScript.info
-   "Eloquent JavaScript" by Marijn Haverbeke
-   "You Don't Know JS" book series
