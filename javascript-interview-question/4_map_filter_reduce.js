const numbers = [1, 2, 3, 4, 5];

//map
const mapArr = numbers.map((num, index, array) => num * 2);
console.log('mapArr', mapArr); //return new array with the results of calling a provided function on every element in the calling array

//filter
const filterArr = numbers.filter((num, index, array) => num > 2);
console.log('filterArr', filterArr); //return new array with elements that pass the test implemented by the provided function

//reduce
//**return a single value which is the sum of the array
// With initial value 0
const reduceArrWithInitial = numbers.reduce((sum, element) => sum + element, 0);
console.log('reduceArrWithInitial', reduceArrWithInitial);

// Without initial value
const reduceArrWithoutInitial = numbers.reduce((sum, element) => sum + element);
console.log('reduceArrWithoutInitial', reduceArrWithoutInitial);
