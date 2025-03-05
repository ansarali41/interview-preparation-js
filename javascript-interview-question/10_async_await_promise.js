//promise

const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('task 1 success');
    }, 2000);
});

const task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('task 2 success');
    }, 2000);
});

const task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('task 3 success');
    }, 2000);
});

task1
    .then(res => {
        console.log(res);
        return task2;
    })
    .then(res => {
        console.log(res);
        return task3;
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });

// promise .all

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 1 success');
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('promise 2 error');
    }, 1000);
});

// Promise.all([promise1, promise2])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// Promise.race

// Promise.any([promise1, promise2])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.error(err);
//     });

// async await

const getData = async () => {
    try {
        const res = await promise1;
        if (res) {
            console.log(res);
            const res2 = await promise2;
            if (res2) {
                console.log(res2);
            }
        }
    } catch (err) {
        console.error(err);
    }
};

getData();
