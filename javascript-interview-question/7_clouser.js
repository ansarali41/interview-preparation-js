// clouser

/*function once(func, context) {
    let called = false;
    return function () {
        if (!called) {
            // console.log('context', context);
            // console.log('arguments', arguments);
            // console.log('this', this);
            func.apply(context || this, arguments);
            called = true;
        }
    };
}

const print = once((a, b) => {
    console.log('hello', a, b);
});

print(1, 2);
print();
print();*/

const multiplyByTwo = num => {
    return num * 2;
};
const memoize = fn => {
    let cache = new Map();
    return function (num) {
        if (cache.has(num)) {
            return cache.get(num);
        }
        cache.set(num, fn(num));
        return cache.get(num);
    };
};

const memoizedMultiplyByTwo = memoize(multiplyByTwo);
console.time('first call');
console.log(memoizedMultiplyByTwo(4));
console.timeEnd('first call');
console.time('second call');
console.log(memoizedMultiplyByTwo(4));
console.timeEnd('second call');
console.time('third call');
console.log(memoizedMultiplyByTwo(5));
console.timeEnd('third call');
console.time('fourth call');
console.log(memoizedMultiplyByTwo(6));
console.timeEnd('fourth call');
console.time('fifth call');
console.log(memoizedMultiplyByTwo(7));
console.timeEnd('fifth call');
console.time('sixth call');
console.log(memoizedMultiplyByTwo(4));
console.timeEnd('sixth call');
