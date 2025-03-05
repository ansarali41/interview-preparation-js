// curring function

const multiply = (a, b) => {
    return a * b;
};

const multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(5));
