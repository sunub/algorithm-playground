// 2676. Throttle

// Given a function fn and a time in milliseconds t, return a throttled version of that function.

// A throttled function is first called without delay and then, for a time interval of t milliseconds, can't be executed but should store the latest function arguments provided to call fn with them after the end of the delay.

// For instance, t = 50ms, and the function was called at 30ms, 40ms, and 60ms. The first function call would block calling functions for the following t milliseconds. The second function call would save arguments, and the third call arguments should overwrite currently stored arguments from the second call because the second and third calls are called before 80ms. Once the delay has passed, the throttled function should be called with the latest arguments provided during the delay period, and it should also create another delay period of 80ms + t.

// Input: t = 100, calls = [{"t":20,"inputs":[1]}]
// Output: [{"t":20,"inputs":[1]}]

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

const throttle = (fn, t) => {
    let interval = null // Variable to store the interval ID
    let queuedArgs = null // Variable to store the queued arguments

    const processArgs = () => {
        if (queuedArgs === null) {
            clearInterval(interval) // If no queued arguments, clear the interval
            interval = null // Enter the waiting phase
        } else {
            fn(...queuedArgs) // Call the function with the queued arguments
            queuedArgs = null // Clear the queued arguments
        }
    }

    return (...args) => {
        if (interval) {
            queuedArgs = args // If interval is active, queue the arguments
        } else {
            fn(...args) // Call the function with the arguments
            interval = setInterval(processArgs, t) // Enter the looping phase with a specified time interval
        }
    }
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
