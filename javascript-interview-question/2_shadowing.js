//shadowing
//shadowing is the process of declaring a variable with the same name as a variable declared in an outer scope.

// with let
let a = 10;
function testLet() {
    let a = 20;
    console.log('let inside function', a); //output: 20 output //**shadowed here**
}
console.log('let outside function', a); //output: 10

testLet();

// with var
var b = 100;
function testVar() {
    var b = 200;
    console.log('var inside function', b); //output: 200 //**shadowed here**
}
console.log('var outside function', b); //output: 100

testVar();

// with const
const c = 1000;
function testConst() {
    const c = 2000;
    console.log('const inside function', c); //output: 2000 //**shadowed here**
}
console.log('const outside function', c); //output: 1000

testConst();

//let and var will show error, can't shadow let with var

function testLetVar() {
    var d = 1000;
    if (true) {
        let d = 2000;
        console.log('let and var inside function', d); //output: 2000 //** "illegal shadowing error" in browser console but works in node.js **
    }
    console.log('let and var outside scope', d); //output: 1000
}

console.log('let and var outside function', d); //output: 1000
testLetVar();
