//var, let, const

var a = 10; //global scope
{
    let b = 20; //local scope
    const c = 30; //block scope
    console.log(a, b, c); // output: 10, 20, 30
}
console.log(a, b, c); // output: 10, undefined, undefined

//var is function scope
//let and const are block scope

//var is hoisted
//let and const are not hoisted

//var is mutable
//let is mutable and const is immutable

//var is not thread safe
//let and const are thread safe

//var is global
//let and const are block scoped

//var is function scoped
//let and const are block scoped

//var is not constant
//let and const are constant

//var is not immutable
//let and const are immutable

//var is not thread safe
//let and const are thread safe
