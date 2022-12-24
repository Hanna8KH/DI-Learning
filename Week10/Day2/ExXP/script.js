// Exercise 1 : Comparison

function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            resolve('munber is less than 10')
        } else {
            reject('number is more than 10');
        }
    });
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Exercise 2 : Promises

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(success), 4000);
});
newPromise
.then((res) => console.log(res))
.catch((err) => console.error('smth went wrong', err));


// Exercise 3 : Resolve & Reject

const promise = Promise.resolve(32)
const promise2 = Promise.reject(error)

promise2.then((res) => console.log(res)).catch((err) => console.error('smth went wrong', err));

