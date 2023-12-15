// 2721. Execute Asynchronous Functions in Parallel

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    try {
        const result = await Promise.all(functions.map((fn) => fn()))
        return result
    } catch (err) {
        throw err
    }
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
