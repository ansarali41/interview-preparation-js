//hoisting is the process of moving declarations to the top of the scope
//hoisting is only applicable for var and function
function testHoisting() {
    // Behind the scenes, JavaScript hoists the declaration:
    // var a;

    console.log(a); // output: undefined
    var a = 10; // This is where the actual initialization happens
}

testHoisting();

// console.log(ab); //output: error
// let ab = 10;

// console.log(c); //output: error
// const c = 10;

/* let and const are hoisted but not initialized, resulting in a "temporal dead zone" where accessing them before declaration throws an error. 

Var and let can be declared without initialization
Var and let can be updated but const cant be
-there are 2 phases involved creation and execution . I creation window object is created then heap memory is allocated and then we initialize functions and variables with undefined (the whole function is stored inside the window object) . In execution the code is executed line by line and assigns variables .
-Hoisting : during creation phase js engine moves function declarations and variable to top of the code 
-var variables are obv hoisted let variables are not (in normal sense they are hoisted in temporal dead zone)
-temporal dead zone : a state in which let and const variables specifically are in scope but have not been declared yet .
*/
