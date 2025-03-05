const { length } = 'js';
// console.log(length);

async function test() {
    return new Promise((resolve, reject) => {
        resolve(length);
    });
}

console.log(test().then(res => console.log(res)));
