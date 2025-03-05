//function declaration
//IIFE

// function declaration
const sum = (function sum(a, b) {
    return (function () {
        return a + b;
    })();
})(5, 5);

console.log(sum);

// let var in a function

// for (let i = 0; i < 5; i++) {
//     // let is block scoped
//     console.log('let i::up::', i);
//     setTimeout(() => {
//         console.log('let i:', i);
//     }, i * 1000);
// }

//break
// console.log('break');

var i = 0;
for (i = 0; i < 5; i++) {
    // var is function scoped
    console.log('var i:up::', i);
    setTimeout(() => {
        console.log('var i:', i);
    }, i * 1000);
}

//

var x = 100;

function test(a) {
    //params
    console.log(x);
    var x = 200;
    console.log(a);
}

test(5); // arguments

//arrow vs normal function

const user = {
    name: 'John',
    getName: function () {
        console.log(this);
    },
    getArrowName: () => {
        console.log('this', this);
        console.log(this.name);
    },
};

user.getName();
user.getArrowName();
