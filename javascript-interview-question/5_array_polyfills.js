//map

Array.prototype.myMap = function (callback) {
    const result = [];
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        console.log('result', result);
        result.push(callback(this[i], i, this));
    }
    return result;
};

// const numbers = [1, 2, 3, 4, 5];
// const mapArr = numbers.myMap(num => num * 2);
// console.log(mapArr);

//filter

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        console.log('callback(this[i], i, this)', callback(this[i], i, this));
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

const numbers2 = [1, 2, 3, 4, 5];
const filterArr = numbers2.myFilter(num => num > 2); //callback(this[i]=> this[i] > 2)
console.log(filterArr);

//reduce

//  reduce((sum, currentValue,i, array) => {}, initialValue)

Array.prototype.myReducer = function (callback, initialValue) {
    let sum = initialValue;
    for (let i = 0; i < this.length; i++) {
        sum = sum ? callback(sum, this[i], i, this) : this[i];
    }
    return sum;
};

const numbers3 = [1, 2, 3, 4, 5];
const reduceArr = numbers3.myReducer((sum, num) => sum + num, 0);
console.log(reduceArr);

// map vs forEach

// map returns a new array based on the callback function
// forEach does not return anything

// map is lazy, it does not execute the function until it is called
// forEach is eager, it executes the function immediately

// map

const numbers4 = [1, 2, 3, 4, 5];
const mapArr2 = numbers4.map(num => num * 2).filter(num => num > 5); //chain methods
console.log(mapArr2);

// forEach

const numbers5 = [1, 2, 3, 4, 5];
numbers5.forEach((num, i) => (numbers5[i] = num + 2)); // does not return any array so cant chain methods

console.log('numbers5', numbers5);
