/**
 * @example
 * Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
 *
 * @argument { Input: millis = 100 }
 * @returns { Output: 100 }
 */

async function sleep(millis: number) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => resolve(millis), millis)
        } catch (err) {
            reject(err)
        }
    })
}

let t: number = Date.now()
sleep(100).then(() => console.log(Date.now() - t))

// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
